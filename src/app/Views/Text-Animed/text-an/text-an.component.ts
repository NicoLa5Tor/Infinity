import {  Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-text-an',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-an.component.html',
  styleUrl: './text-an.component.css'
})
export class TextAnComponent {
text = "Infinity"
scroll1 = false;
@HostListener('window:scroll',[])
onScroll(){
  const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

    // Si el porcentaje de desplazamiento es igual o mayor al 20%, establece scroll1 en true
    this.scroll1 = scrollPercentage >= 13;
}
}  