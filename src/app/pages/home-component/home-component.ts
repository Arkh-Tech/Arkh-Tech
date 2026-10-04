import { Component } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar-component/nav-bar-component';
import { HeroComponent } from '../components/hero-component/hero-component';
import { StatsComponent } from '../components/stats-component/stats-component';
import { ServicesComponent } from '../components/services-component/services-component';
import { AboutComponent } from '../components/about-component/about-component';
import { TechnologiesComponent } from '../components/technologies-component/technologies-component';
import { ContactComponent } from '../components/contact-component/contact-component';
import { FooterComponent } from '../components/footer-component/footer-component';
import { ProjectsComponent } from '../components/projects-component/projects-component';

@Component({
  imports: [NavBarComponent, HeroComponent, StatsComponent, ServicesComponent, AboutComponent, TechnologiesComponent, ContactComponent, FooterComponent, ProjectsComponent],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {}
