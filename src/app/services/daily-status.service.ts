import { Injectable, signal } from '@angular/core';

export interface DailyStatus {
  mood: string;
  availability: 'Available' | 'Busy' | 'In a meeting' | 'On leave';
  workingOn: string;
  updatedAt: string;
}

const STORAGE_KEY = 'portfolio-daily-status';

const DEFAULT_STATUS: DailyStatus = {
  mood: 'Available',
  availability: 'Available',
  workingOn: 'Working on portfolio improvements',
  updatedAt: new Date().toISOString()
};

@Injectable({ providedIn: 'root' })
export class DailyStatusService {
  status = signal<DailyStatus>(this.load());

  private load(): DailyStatus {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_STATUS;
  }

  update(partial: Partial<DailyStatus>) {
    const updated: DailyStatus = {
      ...this.status(),
      ...partial,
      updatedAt: new Date().toISOString()
    };
    this.status.set(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
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
