import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVGanimedComponent } from '../../Text-Animed/svganimed/svganimed.component';
import Aos from 'aos';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, SVGanimedComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements AfterViewInit {
  ngAfterViewInit(): void {
      Aos.init();
  }

}
