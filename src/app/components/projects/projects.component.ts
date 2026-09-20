import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  link: string;
  emoji: string;
  image: string;
  challenge: string;
  solution: string;
  impact: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  categories = ['All', 'Warehouse Ops', 'Supply Chain', 'Healthcare', 'Payments'];
  activeCategory = signal('All');
  selectedProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      title: 'Warehouse Inventory & Receiving',
      desc: 'Designed and delivered inventory management and receiving workflows in WMS, covering stock updates, validations, exception handling, and operational visibility.',
      tags: ['WMS', 'Inventory', 'Receiving', 'Spring Boot'],
      category: 'Warehouse Ops',
      link: '#',
      emoji: '📦',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
      challenge: 'Warehouse teams needed a reliable flow for inbound receiving, stock validation, and exception visibility across operational bottlenecks.',
      solution: 'I designed receiving and inventory workflows in the WMS stack, improving validation logic, status tracking, and process transparency for faster operational decisions.',
      impact: 'This created cleaner inventory visibility, reduced manual reconciliation, and improved throughput across receiving workflows.'
    },
    {
      title: 'Order & Payment Lifecycle',
      desc: 'Built the end-to-end digital supply chain payment and order flow, from authorization and settlement to refund, reversal, and transaction tracking across systems.',
      tags: ['Order Management', 'Payments', 'Microservices', 'Java'],
      category: 'Payments',
      link: '#',
      emoji: '💳',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
      challenge: 'Payment and order transitions were fragmented across systems, making authorization, reversal, and settlement tracking difficult to manage end to end.',
      solution: 'I implemented the full lifecycle across order and payment services, covering authorization, re-authorization, settlement, refunds, and exception handling with secure orchestration.',
      impact: 'The result was a more reliable transaction flow with stronger traceability, fewer errors, and better business continuity.'
    },
    {
      title: 'Digital Supply Chain Platform',
      desc: 'Worked on end-to-end order management and fulfilment logic for digital supply chain workflows, connecting warehouse, order, and payment components for smooth execution.',
      tags: ['DSCM', 'Order Flow', 'Fulfillment', 'Integration'],
      category: 'Supply Chain',
      link: '#',
      emoji: '🚚',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
      challenge: 'Business operations needed a unified digital flow across order intake, fulfilment, and settlement without losing visibility at each milestone.',
      solution: 'I worked on the connected order management and fulfilment domain, bringing warehouse, order, and payment steps into a more cohesive operational flow.',
      impact: 'This improved orchestration across the order lifecycle and reduced friction between core business modules.'
    },
    {
      title: 'Healthcare & Life Sciences Systems',
      desc: 'Supported healthcare and life sciences domain workflows with reliable, compliant, and scalable digital operations designed for business-critical processes.',
      tags: ['Healthcare', 'Life Sciences', 'Operations', 'Enterprise'],
      category: 'Healthcare',
      link: '#',
      emoji: '🧬',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
      challenge: 'Critical domain workflows required dependable digital execution while balancing business continuity and operational accuracy.',
      solution: 'I contributed to enterprise workflows tailored to healthcare and life sciences use cases, helping maintain consistency, traceability, and service reliability.',
      impact: 'The work supported smoother operations in a high-stakes domain where process integrity and continuity are essential.'
    }
  ];

  filteredProjects = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.projects : this.projects.filter(p => p.category === cat);
  });

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }
}
