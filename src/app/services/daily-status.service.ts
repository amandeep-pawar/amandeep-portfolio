import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export interface DailyStatus {
  id?: number;
  mood: string;
  availability: 'Available' | 'Busy' | 'In a meeting' | 'On leave';
  workingOn: string;
  updatedAt: string;
}

const DEFAULT_STATUS: DailyStatus = {
  id: 1,
  mood: 'Available',
  availability: 'Available',
  workingOn: 'Building Scalable Enterprise Systems & Distributed Systems',
  updatedAt: new Date().toISOString()
};

@Injectable({ providedIn: 'root' })
export class DailyStatusService {
  status = signal<DailyStatus>(DEFAULT_STATUS);
  private readonly hasSupabaseConfig = !!environment?.supabaseUrl && !!environment?.supabaseAnonKey && environment.supabaseUrl.startsWith('http');
  private readonly supabase = this.hasSupabaseConfig ? createClient(environment.supabaseUrl, environment.supabaseAnonKey) : null;

  constructor() {
    this.load();
    if (this.supabase) {
      this.subscribe();
    }
  }

  private async load(): Promise<void> {
    if (!this.supabase) {
      console.warn('Supabase config missing; using local default status.');
      return;
    }

    const { data, error } = await this.supabase
      .from('daily_status')
      .select('*')
      .eq('id', 1)
      .single();

    if (error) {
      console.warn('No shared status found yet, using default:', error.message);
      return;
    }

    if (data) {
      this.status.set(data as DailyStatus);
    }
  }

  private subscribe(): void {
    if (!this.supabase) {
      return;
    }

    this.supabase
      .channel('daily-status-updates')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'daily_status', filter: 'id=eq.1' },
        (payload) => {
          const next = payload.new as DailyStatus;
          this.status.set(next);
        }
      )
      .subscribe();
  }

  async update(partial: Partial<DailyStatus>): Promise<void> {
    const updated: DailyStatus = {
      ...this.status(),
      ...partial,
      id: 1,
      updatedAt: new Date().toISOString()
    };

    this.status.set(updated);

    if (!this.supabase) {
      console.warn('Supabase config missing; skipping remote sync.');
      return;
    }

    const { error } = await this.supabase
      .from('daily_status')
      .upsert(updated, { onConflict: 'id' });

    if (error) {
      console.error('Failed to sync status:', error.message);
    }
  }

  timeAgo(iso: string): string {
    const diffMs = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins} min ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hr ago`;
    const days = Math.floor(hrs / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}
