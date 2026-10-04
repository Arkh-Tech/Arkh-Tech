import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-projects-component',
  styleUrl: './projects-component.css',
  templateUrl: './projects-component.html',
})
export class ProjectsComponent {

  sanitizer = inject(DomSanitizer);

  projects = [
    {
      image: "images/projects/project-desktop.svg",
      type: "Aplicação desktop",
      title: "Sistema integrado de gestão",
      client: "Nome da empresa 01",
    },
    {
      image: "images/projects/project-mobile.svg",
      type: "Aplicativo mobile",
      title: "Gestão de delivery em tempo real",
      client: "Nome da empresa 01",
    },
    {
      image: 'images/projects/project-web.svg',
      type: "Plataforma web",
      title: "Dashboard de vendas e operações",
      client: "Nome da empresa 02",
    },
    /* {
      image: "images/projects/project-iot.svg",
      type: "Sistema IoT",
      title: "Automação residencial conectado",
      client: "Nome da empresa 03",
    } */
  ]


}
