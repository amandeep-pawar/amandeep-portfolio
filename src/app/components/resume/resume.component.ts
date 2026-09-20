import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  title: string;
  org: string;
  period: string;
  desc: string;
  location?: string;
  role?: string;
  domain?: string;
  badge?: string;
  work?: string;
  workPoints?: string[];
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  experience: TimelineItem[] = [
    {
      title: 'Engineer Technology',
      org: 'Iris Software Inc.',
      period: 'Jan, 2026 — Present',
      location: 'Noida, Uttar Pradesh',
      role: 'Java Full-Stack Developer',
      domain: 'Financial Business Applications',
      badge: 'Verified',
      workPoints: [
        'Integrated third-party APIs and improved exception handling and logging with SLF4J to make production issues easier to trace and resolve.',
        'Deployed applications with Docker and managed build pipelines using Jenkins CI/CD for smoother release delivery.',
        'Implemented JWT-based authentication and authorization using spring security and adding exceptional handling, rate limiting,logging to improve system reliability.'
      ],
      desc: ''
    },
    {
      title: 'SDE II',
      org: 'HashedIn by Deloitte',
      period: 'Apr,2025 — Dec,2025',
      location: 'Gurgaon, Haryana',
      role: 'Product Engineer',
      domain: 'Financial Web Applications',
      badge: 'Verified',
      workPoints: [
        'Design and developed RESTful microservices using Java, Spring Boot, and Microservices, reducing application response time and improving scalability.',
        'Triage product or system issues and debug/track/resolve by analyzing the sources of issues the impact on hardware, network or service operations and quality',
        'Improved application reliability and performance across key product modules used by growing customer bases.',
        
      ],
      desc: ''
    },
    {
      title: 'SDE I',
      org: 'Manhattan Associates',
      period: '2023 — 2025',
      location: 'Bangalore, Karnataka',
      role: 'Full Stack Engineer',
      domain: 'DSCM (Digital Supply Chain Management) and WMS (Warehouse Management System)',
      badge: 'Verified',
      workPoints: [
        'Designed and implemented the Payment Lifecycle (Authorization, Re-Authorization, Auth Reversal, Settlement, Refund,Exchange) using Spring Boot, Spring MVC, Hibernate, and Microservices, ensuring robust transaction handling and reliability.',
        'Integrated with external payment gateways to perform credit card verification, fraud checks, and payment transaction sessions,managing seamless request–response communication for secure and efficient payment flows.',
        'Designed and enhanced Warehouse Management System (WMS) modules to handle inventory tracking, order fulfillment,shipment processing, and returns, ensuring real-time stock visibility and seamless integration with payment and order management systems.'
      ],
      desc: ''
    },
    {
      title: 'Systems Engineer',
      org: 'Infosys Limited',
      period: '2021 — 2023',
      location: 'Pune, Maharashtra',
      role: 'Backend Engineer',
      domain: 'Financial Web Applications',
      badge: 'Verified',
      workPoints: [
        'Developed backend CRUD operations and UBS API endpoints using Spring Boot and Microservices, integrating multiple APIs for efficient and optimized data handling.',
        'Analyzed, debugged, and resolved system and product issues across hardware, network, and service layers, improving overallsystem reliability and performance.'
      ],
      desc: ''
    }
  ];

  education: TimelineItem[] = [
    {
      title: 'B.Tech. in Computer Science & Engineering',
      org: 'Mahatma Basaweshwar Education Society College of Engineering, Latur, Maharashtra',
      period: '2017 — 2021',
      desc: 'Graduated with honors. Focused on software engineering and computer science fundamentals.'
    },
    {
      title: 'SSC (Class 12)',
      org: 'Roots International School, Noorpur, Uttar Pradesh',
      period: '2015 - 2017',
      desc: 'Completed CBSE curriculum with a focus on science and mathematics.'
    },
    {
      title: 'HSC (Class 10)',
      org: 'R. R Public School, Noorpur, Uttar Pradesh',
      period: '2013 - 2015',
      desc: 'Completed CBSE curriculum and developed a strong academic foundation.'
    }
  ];
}
