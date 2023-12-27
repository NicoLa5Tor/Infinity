import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackWhiteComponent } from '../../Animations/back-white/back-white.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BackWhiteComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
