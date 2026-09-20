import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  emoji: string;
  title: string;
  issuer: string;
  year: string;
  desc: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    { emoji: '🏆', title: 'Hackathon Winner', issuer: 'Manhattan Associates Developement Center', year: '2024', desc: 'First place among 200+ teams for a real-time accessibility tool.' },
    { emoji: '📜', title: 'AWS Certified', issuer: 'Amazon Web Services', year: '2026', desc: 'Cloud Practitioner certification with distinction.' },
    { emoji: '⭐', title: 'Spot Award', issuer: 'Manhattan Associates Developement Center', year: '2023', desc: 'Recognized for leading a critical platform migration.' },
    { emoji: '📝', title: 'Certified Microservices Professional', issuer: 'Infosys Limited', year: '2021', desc: 'Build the distributed Architecture for scalable applications.' }
  ];
}
