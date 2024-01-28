import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormControl, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ViewportScroller } from '@angular/common';
import AOS from 'aos'



@Component({
  selector: 'app-agend-cita',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  templateUrl: './agend-cita.component.html',
  styleUrl: './agend-cita.component.scss',
})
export class AgendCitaComponent implements OnInit, AfterViewInit {

  constructor(private scroll : ViewportScroller) {

  }
 
  ngOnInit(): void {
    this.onResize(null);
    setTimeout(()=>{

    }, 1000)
  }
  ngAfterViewInit(): void {
    AOS.init();
}
  hour = null;
  @HostListener('window:resize', [])
  onResize(event: any): void {
    if (document != null) {
      const element = document.querySelector('#bottom') as HTMLElement;
      const neElement = document.querySelector('#cont-bot') as HTMLElement;
      const ola = document.querySelector('.ola-1') as HTMLElement;

      if (element) {
        const height = element.offsetHeight;
        const asigHeight = height - 200;
        const olaHeight = ola.offsetHeight;
        const olaHe = (olaHeight) * -1;
        console.log("entra en el element la altura es: ", height)
        element.style.zIndex = '7';
        ola.style.marginBlockStart = olaHe + 'px';
        neElement.style.height = asigHeight + 'px';
      } else {

      }
    }

  }
}