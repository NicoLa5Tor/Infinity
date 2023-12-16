import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarousellComponent {



}
