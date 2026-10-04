import { Component, inject} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-services-component',
  styleUrl: './services-component.css',
  templateUrl: './services-component.html',
})
export class ServicesComponent {

  sanitizer = inject(DomSanitizer);

  servicesList = [
    {
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6 text-primary"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>'),
      title: "Desktop",
      description:
        "Aplicações robustas para Windows, macOS e Linux. Performance nativa, experiência fluida e integração total com o sistema operacional.",
      tags: ["Electron", "Tauri", ".NET", "Qt"],
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone w-6 h-6 text-primary"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>'),
      title: "Mobile",
      description:
        "Apps nativos e multiplataforma para iOS e Android. Interface intuitiva, alta performance e sincronização em tempo real.",
      tags: ["Kotlin", "Flutter", "Nativescript ", "Swift", ],
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-6 h-6 text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>'),
      title: "Web",
      description:
        "Plataformas web escaláveis e responsivas. Do MVP ao produto enterprise, entregamos soluções que crescem com o seu negócio.",
      tags: ["Angular", "PHP", "Docker", "PostgreSQL", "MariaDB"],
    },
    /* {
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu w-6 h-6 text-primary"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>'),
      title: "IoT",
      description:
        "Soluções conectadas para ambientes industriais e residenciais. Firmware embarcado, dashboards em tempo real e análise de dados.",
      tags: ["Arduino", "Raspberry Pi", "ESP32"],
    }, */
  ];
}

