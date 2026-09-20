import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DailyStatusService } from '../../services/daily-status.service';

@Component({
  selector: 'app-daily-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.scss']
})
export class DailyStatusComponent {
  editing = signal(false);
  canEditStatus = signal(false);
  authUnlocked = signal(false);
  password = '';
  showPasswordInput = signal(false);
  status;
  form: { availability: 'Available' | 'Busy' | 'In a meeting' | 'On leave'; mood: string; workingOn: string; };

  constructor(public statusService: DailyStatusService) {
    this.status = this.statusService.status;
    const current = this.status();
    this.form = { availability: current.availability, mood: current.mood, workingOn: current.workingOn };
  }

  toggleLock() {
    if (this.authUnlocked()) {
      this.editing.set(!this.editing());
      return;
    }

    this.showPasswordInput.set(!this.showPasswordInput());
    if (!this.showPasswordInput()) {
      this.password = '';
    }
  }

  unlockStatus() {
    const expected = 'Amanasp099@';
    if (this.password === expected) {
      this.authUnlocked.set(true);
      this.canEditStatus.set(true);
      this.showPasswordInput.set(false);
      this.editing.set(true);
      this.password = '';
      return;
    }

    this.password = '';
    alert('Incorrect password. Only the owner can update the status.');
  }

  save() {
    if (!this.canEditStatus()) {
      this.editing.set(false);
      return;
    }

    this.statusService.update(this.form);
    this.editing.set(false);
  }

  private isOwnerEnvironment(): boolean {
    const hostname = window.location.hostname.toLowerCase();
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local');
  }
}
