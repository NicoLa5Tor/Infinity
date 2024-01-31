import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svganimed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svganimed.component.html',
  styleUrl: './svganimed.component.scss'
})
export class SVGanimedComponent {
@Input() subTitle = '';
}
