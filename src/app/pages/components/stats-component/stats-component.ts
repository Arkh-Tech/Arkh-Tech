import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stats-component',
  styleUrl: './stats-component.css',
  templateUrl: './stats-component.html',
})
export class StatsComponent {

  stats = [
    { value: "5+", label: "Anos de experiência" },
/*     { value: "200+", label: "Projetos entregues" },
    { value: "50+", label: "Clientes ativos" }, */
    { value: "99%", label: "Satisfação dos clientes" },
  ];


}
