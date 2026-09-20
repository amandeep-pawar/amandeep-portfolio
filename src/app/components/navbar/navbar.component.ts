import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { DailyStatusComponent } from '../daily-status/daily-status.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, DailyStatusComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = signal(false);

  constructor(public theme: ThemeService) {}

  close() { this.menuOpen.set(false); }

  async share() {
    const shareData = {
      title: 'Alex Rivera | Portfolio',
      text: 'Check out my portfolio — resume, projects & achievements!',
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert('Portfolio link copied to clipboard!');
    }
  }
}
