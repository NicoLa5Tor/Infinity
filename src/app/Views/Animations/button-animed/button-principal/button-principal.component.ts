import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-button-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-principal.component.html',
  styleUrl: './button-principal.component.css'
})
export class ButtonPrincipalComponent {
  url = '/';
  @Input() btn1 = false;
  @Input() btn2 = false;
  @Input() btn3 = false;
  @Input() btn4 = false;
  @Input() inUrl = "";
  @Input() text = "";
  constructor(private rout: Router, private scroll : ViewportScroller) {

   }
  onClick() {
  this.url += this.inUrl;
  //console.log("la url es: ",this.url);
  this.rout.navigate([this.url])
  }

}
