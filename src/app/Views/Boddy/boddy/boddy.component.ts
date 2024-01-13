import { Component, ElementRef, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoCardComponent } from '../../Card/two-card/two-card.component';
import { TextAnComponent } from '../../Text-Animed/text-an/text-an.component';
import { BubblesComponent } from '../../Animations/bubbles/bubbles.component';
import { CarouselComponent } from '../../Carousel/carousel/carousel.component';
import { ButtonPrincipalComponent } from '../../Animations/button-animed/button-principal/button-principal.component';
@Component({
  selector: 'app-boddy',
  standalone: true,
  imports: [CommonModule,TwoCardComponent,TextAnComponent,BubblesComponent,CarouselComponent, ButtonPrincipalComponent],
  templateUrl: './boddy.component.html',
  styleUrl: './boddy.component.css',

})
export class BoddyComponent  {

}