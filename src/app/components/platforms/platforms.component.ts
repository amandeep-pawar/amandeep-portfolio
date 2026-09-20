import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Platform {
  name: string;
  url: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent {
  platforms: Platform[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/amandeep-pawar',
      icon: '🐙',
      description: 'Code, experiments, and reusable work.'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/amandeeps_pawar/',
      icon: '🧠',
      description: 'Problem solving and algorithm practice.'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/',
      icon: '💻',
      description: 'Competitive programming and coding challenges.'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/amandeep_pawars1',
      icon: '🏁',
      description: 'Skills, contests, and interview prep.'
    }
  ];
}
