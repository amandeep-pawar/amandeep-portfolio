import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  hobbies = [
    { icon: '🎧', title: 'Music', detail: 'Listening to podcasts, focus playlists.' },
    { icon: '📚', title: 'Reading', detail: 'Exploring tech, productivity, and personal growth books.' },
    { icon: '🏃', title: 'Fitness', detail: 'Staying active through running, gym routines, cricket, badminton and outdoor walks.' },
    { icon: '✍️', title: 'Writing', detail: 'Documenting ideas, learnings, and technical notes.' }
  ];
}
