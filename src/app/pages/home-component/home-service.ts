import { Service } from '@angular/core';

@Service()
export class HomeService {

    scrollToElement(id: string): void {
      
      const element = document.getElementById(id.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
}
