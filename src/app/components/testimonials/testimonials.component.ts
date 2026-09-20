import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial { name: string; role: string; quote: string; initials: string; }

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') private slider!: ElementRef<HTMLDivElement>;
  private intervalId: any = null;

  testimonials: Testimonial[] = [
    {
      name: 'Aditya Lahabar',
      role: 'Software Engineer, Infosys Limited',
      quote: 'A software engineer who brings sharp thinking and ownership to DSCM, payment gateway flows, and enterprise integration work. His understanding of multithreading and locking mechanisms makes him dependable in high-risk, transaction-heavy systems.',
      initials: 'AL'
    },
    {
      name: 'Ujjawal Ranjan',
      role: 'Tech Lead, Manhattan Associates',
      quote: 'Strong engineering mindset, highly reliable in solving complex backend issues, and excellent at building production-ready solutions around payment lifecycle and distributed processing.',
      initials: 'UR'
    },
    {
      name: 'Raj Kiran Sodadasi',
      role: 'Manager, Manhattan Associates',
      quote: 'Very focused, proactive, and technically sound. He consistently contributes with clarity, ownership, and problem-solving ability across DSCM and payment domain responsibilities.',
      initials: 'RK'
    },
    {
      name: 'Pavithra Thimmeygowdu',
      role: 'Tech Lead, Manhattan Associates',
      quote: 'An engineer who combines domain understanding with execution quality. His ability to reason through payment flows, locking logic, and complex workflows adds real value to the team.',
      initials: 'PT'
    },
    {
      name: 'Sanchit Dogra',
      role: 'Project Lead, Manhattan Associates',
      quote: 'Analytical, calm under pressure, and excellent in handling critical technical work. He is someone who can be trusted to drive both business impact and engineering excellence.',
      initials: 'SD'
    }
  ];

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  scroll(direction: 'prev' | 'next'): void {
    const slider = this.slider?.nativeElement;
    if (!slider) return;

    const cardWidth = slider.querySelector('.t-card')?.getBoundingClientRect().width ?? 320;
    const gap = 24;
    const step = cardWidth + gap;

    slider.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth'
    });
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();
    this.intervalId = setInterval(() => {
      const slider = this.slider?.nativeElement;
      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScroll - 4) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 2800);
  }

  private stopAutoScroll(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
