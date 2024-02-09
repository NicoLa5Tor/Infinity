import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { NavMenuTellComponent } from '../../Animations/nav-menu-tell/nav-menu-tell.component';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


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
  exitTwo = false;
  constructor(private rout : Router, private scroll : ViewportScroller){

  }
@HostListener('window:scroll',[])
onScroll(){
  this.exit = window.scrollY > 100;
  this.scrolled = window.scrollY > 500;
  this.exitTwo = window.scrollY < 500;
  
  //console.log("scroll")
}
onNavigate(dat : string){
  if(dat != null){
  const url = '/' + dat;
  this.scroll.scrollToPosition([0,0]);
  setTimeout(()=>{
    console.log("Redirige")
    this.rout.navigate([url]);
  },1000)
  }
}
}
