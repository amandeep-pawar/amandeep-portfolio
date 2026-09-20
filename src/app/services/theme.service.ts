import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'dark' | 'light'>(
    (localStorage.getItem('portfolio-theme') as 'dark' | 'light') || 'dark'
  );

  constructor() {
    this.apply(this.theme());
  }

  toggle() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    localStorage.setItem('portfolio-theme', next);
    this.apply(next);
  }

  private apply(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
