import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-menu-tell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu-tell.component.html',
  styleUrl: './nav-menu-tell.component.scss',

})
export class NavMenuTellComponent {
  constructor(){
  }
  open = false;
  count = 0;
menuOpen(){
this.count ++;
if(this.count % 2 ==  0){
  this.open = false
}else{
this.open = true;
}
}
}