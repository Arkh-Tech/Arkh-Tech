import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-technologies-component',
  styleUrl: './technologies-component.css',
  templateUrl: './technologies-component.html',
})
export class TechnologiesComponent {
  
  techStackList = [
    "TypeScript", "Angular", "Node.js", "Python", "PHP", "C#",
    "PostgreSQL", "MySQL", "Docker", "VPS", "AWS", "Azure",
  ];

}
