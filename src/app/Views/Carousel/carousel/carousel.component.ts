import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonPrincipalComponent } from '../../Animations/button-animed/button-principal/button-principal.component';

@Component({
  standalone: true,
  imports: [CommonModule,ButtonPrincipalComponent],
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
}
