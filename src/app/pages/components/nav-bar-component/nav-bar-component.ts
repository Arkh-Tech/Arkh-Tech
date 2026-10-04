import { Component, inject, signal } from '@angular/core';
import { HomeService } from '../../home-component/home-service';

@Component({
  imports: [],
  selector: 'app-nav-bar-component',
  styleUrl: './nav-bar-component.css',
  templateUrl: './nav-bar-component.html',
})
export class NavBarComponent {

  homeService = inject(HomeService);

  open = signal(false);
  
  navLinks = [
    {'label': "Serviços", 'link': 'services'},
    {'label': "Projetos", 'link': 'projects'},
    {'label': "Sobre", 'link': 'about'}, 
    {'label': "Tecnologias", 'link': 'technologies'},
    {'label': "Contato", 'link': 'contact'}
  ];
  
  
  clickMenuMobile(id: string): void
  {
    this.homeService.scrollToElement(id);
    this.open.set(!this.open())
  }
  
}
