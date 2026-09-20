import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sent = signal(false);

  submit(e: Event) {
    e.preventDefault();

    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      this.sent.set(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${this.name.trim()}`);
    const body = encodeURIComponent(
      `${this.message.trim()}\n\nFrom: ${this.name.trim()} (${this.email.trim()})`
    );

    window.location.href = `mailto:amandeep.pawarsingh@gmail.com?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
