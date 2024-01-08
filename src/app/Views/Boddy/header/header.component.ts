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
  exit : boolean = false;
@HostListener('window:scroll',[])
onScroll(){
  this.exit = window.scrollY > 100;
  this.scrolled = window.scrollY > 500;
  
  //console.log("scroll")
}
}
