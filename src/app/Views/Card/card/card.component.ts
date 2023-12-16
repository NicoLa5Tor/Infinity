import { Component, ElementRef, HostListener, ViewChild,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAuxComponent } from './card-aux/card-aux.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,CardAuxComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 
}