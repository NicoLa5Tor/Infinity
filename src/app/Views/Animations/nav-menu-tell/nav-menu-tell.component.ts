import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-menu-tell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu-tell.component.html',
  styleUrl: './nav-menu-tell.component.scss',

})
export class NavMenuTellComponent {
  @ViewChild('tuBoton') boton!: ElementRef<any>;

  constructor(private rout: Router, private scroll: ViewportScroller
  ) {
  }
  open = false;
  count = 0;
  menuOpen() {
    this.count++;
    if (this.count % 2 == 0) {
      this.open = false
    } else {
      this.open = true;
    }
  }
  onNavigate(url: string) {
    if (url != null) {
      const dat = '/' + url;
      this.scroll.scrollToPosition([0, 0]);
      this.open = true;
      setTimeout(() => {
        this.rout.navigate([dat]);
      }, 1000)

    }
  }
}