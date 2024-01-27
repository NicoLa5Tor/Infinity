import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormControl, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, ThemePalette } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


export const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
}

@Component({
  selector: 'app-agend-cita',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  templateUrl: './agend-cita.component.html',
  providers: [
    {
      provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT
    }
  ],
  styleUrl: './agend-cita.component.scss'
})
export class AgendCitaComponent implements OnInit {
  ngOnInit(): void {
    this.onResize(null);
  }
  hour = null;
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const element = document.querySelector('#bottom') as HTMLElement;
    const neElement = document.querySelector('#cont-bot') as HTMLElement;
    const ola = document.querySelector('.ola-1') as HTMLElement;

    if (element) {
      const height = element.offsetHeight;
      const asigHeight = height - 250;
      const olaHeight = ola.offsetHeight;
      const olaHe = (olaHeight) * -1;
      // console.log('el tamño es este: ',height)
      //console.log("la ol queda asi: ", olaHeight)
      //margin de la ola-1<
      ola.style.marginBlockStart = olaHe + 'px';
      //----------------------|||----------------
      neElement.style.height = asigHeight + 'px';


    }
  }
}