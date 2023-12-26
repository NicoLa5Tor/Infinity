import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { NavMenuTellComponent } from '../../nav-menu-tell/nav-menu-tell.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavMenuTellComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {
  scrolled: boolean = false;
@HostListener('window:scroll',[])
onScroll(){
  this.scrolled = window.scrollY > 50;
  //console.log("scroll")
}
}
