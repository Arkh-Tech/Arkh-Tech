import { HomeService } from './../../home-component/home-service';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-component',
  styleUrl: './hero-component.css',
  templateUrl: './hero-component.html',
})
export class HeroComponent {
  
  homeService = inject(HomeService);

}
