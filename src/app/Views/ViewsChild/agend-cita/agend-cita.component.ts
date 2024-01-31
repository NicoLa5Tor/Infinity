import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
import { SVGanimedComponent } from '../../Text-Animed/svganimed/svganimed.component';
declare var MercadoPago: any;
// @ts-ignore
import Aos from 'aos';


@Component({
  selector: 'app-agend-cita',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, SVGanimedComponent],
  templateUrl: './agend-cita.component.html',
  styleUrl: './agend-cita.component.scss',
})
export class AgendCitaComponent implements OnInit, AfterViewInit {

  constructor(private scroll: ViewportScroller, private el: ElementRef) {

  }

  ngOnInit(): void {
    this.mercadoPago();
    this.onResize(null);
    setTimeout(() => {

    }, 1000)
  }
  ngAfterViewInit(): void {
    Aos.init();
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
        //  console.log("entra en el element la altura es: ", height)
        element.style.zIndex = '7';
        ola.style.marginBlockStart = olaHe + 'px';
        neElement.style.height = asigHeight + 'px';
      } else {

      }
    }

  }

  mercadoPago() {
    const mp = new MercadoPago('TEST-1c42164c-abaa-4b73-87a6-dba8ad99d42f', {
      locale: 'es-CO'
    });

    mp.bricks().create("wallet", "wallet_container", {
      initialization: {
        preferenceId: "<PREFERENCE_ID>",
      },
    });
  }
}