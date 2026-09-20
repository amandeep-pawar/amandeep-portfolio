import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  technologies = [
    'Java-8/11/17', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'HTML5', 'CSS',
    'SCSS', 'REST APIs', 'MySQL', 'MongoDB', 'Redis', 'AWS','Kafka', 'RabbitMQ', 'Spring Boot', 'Microservices',
    'Spring Security','Spring WebFlux','Spring MVC'
  ];

  softSkills = [
    'Communication Skills',
    'Critical Thinking',
    'Leadership',
    'Project Management'
  ];

  tools = [
    'Git', 'GitHub', 'VS Code', 'Kibana', 'Docker', 'Postman',
    'Jira', 'Grafana', 'Swagger', 'IntelliJ IDEA', 'Nexus', 'CI/CD','Maven/Gradle', 'Jenkins', 'SonarQube','Prometheus','Kubernetes',
    'ElasticSearch'
  ];

  competitiveProgramming = [
    'Data Structures', 'Algorithms', 'Problem Solving', 'System Design', 'OOPs', 'Design Patterns', 'Multithreading', 'Concurrency', 'Database Design', 'Networking']

  groups: SkillGroup[] = [
    { title: 'Technologies', items: this.technologies },
    { title: 'Soft Skills', items: this.softSkills },
    { title: 'Tools', items: this.tools },
    { title: 'Competitive Programming', items: this.competitiveProgramming }
  ];
}
