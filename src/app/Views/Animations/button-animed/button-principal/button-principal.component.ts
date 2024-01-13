import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-principal.component.html',
  styleUrl: './button-principal.component.css'
})
export class ButtonPrincipalComponent {
@Input() btn1 = false; 
@Input() btn2 = false;
@Input() btn3 = false;
@Input() btn4 = false;
@Input() text = "";

onClick(){
  setTimeout(()=>{
  alert('espera un momento')
  },1000)
}
}
