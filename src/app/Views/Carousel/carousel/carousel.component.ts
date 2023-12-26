import { Component, ViewEncapsulation,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';




@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarousellComponent implements AfterViewInit {

ngAfterViewInit(): void {
  if (typeof document !== 'undefined') {
      
    if (document.querySelector('#container-slider')) {
      setInterval(() => this.fntExecuteSlide("next"), 5000);

    }

    if (document.querySelector('.listslider')) {
      let link = document.querySelectorAll(".listslider li a");
      link.forEach((link: Element) => {
        link.addEventListener('click', (e: Event) => {
          e.preventDefault();
          let item = (link as HTMLElement).getAttribute('itlist') || '';
          let arrItem = item.split("_");
          this.fntExecuteSlide(arrItem[1]);
          return false;
        });
      });
    }
  }
}
  fntExecuteSlide(side: string | number) {
    if (typeof document !== 'undefined') {
      const parentTarget = document.getElementById('slider');

      if (parentTarget) {
        const elements = parentTarget.getElementsByTagName('li');
        let curElement: any, nextElement: number;

        for (let i = 0; i < elements.length; i++) {
          if (elements[i].style.opacity == "1") {
            curElement = i;
            break;
          }
        }
        if (curElement != null) {
          if (side == 'prev' || side == 'next') {
            if (side == "prev") {
              nextElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
            } else {
              nextElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
            }
          } else {
            nextElement = side as number;
            side = (curElement > nextElement) ? 'prev' : 'next';
          }

          const listSlider = document.querySelector(".listslider");
          const elementSel = listSlider ? listSlider.getElementsByTagName("a") as HTMLCollectionOf<HTMLElement> : null;

          if (elementSel && elementSel[curElement]) {
            elementSel[curElement].classList.remove("item-select-slid");
          }

          if (elementSel && elementSel[nextElement]) {
            elementSel[nextElement].classList.add("item-select-slid");
          }

          if (elements && elements[curElement]) {
            elements[curElement].style.opacity = "0";
            elements[curElement].style.zIndex = "0";
          }

          if (elements && elements[nextElement]) {
            elements[nextElement].style.opacity = "1";
            elements[nextElement].style.zIndex = "1";
          }
        }
      }
    }
  }
}  