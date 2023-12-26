import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-text-an',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-an.component.html',
  styleUrl: './text-an.component.css'
})
export class TextAnComponent {
text = "Infinity"
}  