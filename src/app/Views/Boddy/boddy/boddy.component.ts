import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../Card/card/card.component';
import { TwoCardComponent } from '../../TwoCard/two-card/two-card.component';
import { CarousellComponent } from '../../Carousel/carousel/carousel.component';
import { MarkComponent } from '../../mark/mark.component';
import { TextAnComponent } from '../../Text-Animed/text-an/text-an.component';
import { BubblesComponent } from '../../Animations/bubbles/bubbles.component';
@Component({
  selector: 'app-boddy',
  standalone: true,
  imports: [CommonModule,CardComponent,TwoCardComponent,CarousellComponent, MarkComponent,TextAnComponent,BubblesComponent],
  templateUrl: './boddy.component.html',
  styleUrl: './boddy.component.css'
})
export class BoddyComponent {
}