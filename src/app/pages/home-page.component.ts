import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { AchievementsComponent } from '../components/achievements/achievements.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PlatformsComponent } from '../components/platforms/platforms.component';
import { HobbiesComponent } from '../components/hobbies/hobbies.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    PlatformsComponent,
    ResumeComponent,
    SkillsComponent,
    HobbiesComponent,
    ProjectsComponent,
    AchievementsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-resume></app-resume>
    <app-platforms></app-platforms>
    <app-skills></app-skills>
    <app-hobbies></app-hobbies>
    <app-projects></app-projects>
    <app-achievements></app-achievements>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class HomePageComponent {}
