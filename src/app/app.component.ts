import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Views/Header/header/header.component';
import { CarousellComponent } from './Views/Carousel/carousel/carousel.component';
import { FooterComponent } from './Views/Footer/footer/footer.component';
import { BoddyComponent } from './Views/Boddy/boddy/boddy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,CarousellComponent, FooterComponent,BoddyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

