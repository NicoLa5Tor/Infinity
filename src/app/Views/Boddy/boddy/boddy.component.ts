import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../Card/card/card.component';
import { TwoCardComponent } from '../../TwoCard/two-card/two-card.component';
import { MarkComponent } from '../../mark/mark.component';
import { TextAnComponent } from '../../Text-Animed/text-an/text-an.component';
import { BubblesComponent } from '../../Animations/bubbles/bubbles.component';
import { CarouselComponent } from '../../Carousel/carousel/carousel.component';

@Component({
  selector: 'app-boddy',
  standalone: true,
  imports: [CommonModule,CardComponent,TwoCardComponent, MarkComponent,TextAnComponent,BubblesComponent,CarouselComponent],
  templateUrl: './boddy.component.html',
  styleUrl: './boddy.component.css',
})
export class BoddyComponent  {

}