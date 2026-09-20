import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';
import { DailyStatusComponent } from './components/daily-status/daily-status.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HomePageComponent } from './pages/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'status', component: DailyStatusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '**', redirectTo: 'home' }
];
