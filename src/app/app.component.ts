import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Views/Boddy/header/header.component';
import { FooterComponent } from './Views/Boddy/footer/footer.component';
import { BoddyComponent } from './Views/Boddy/boddy/boddy.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, RouterOutlet,HeaderComponent, FooterComponent,BoddyComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private rout: Router) {
    this.rout.navigate(['/inicio'])
  }
 
}

