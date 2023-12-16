import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild,Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-aux.component.html',
  styleUrl: '../card.component.scss'
})
export class CardAuxComponent {
  @ViewChild('cardRef', { static: true }) cardRef!: ElementRef;

  dataImage: string = 'https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop='; 
  constructor(){
    
  }
  width: number = 0;
  height: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  mouseLeaveDelay: any;

  ngAfterViewInit() {
    console.log("EL dato ses: ",this.dataImage)
    this.width = this.cardRef.nativeElement.offsetWidth;
    this.height = this.cardRef.nativeElement.offsetHeight;
  }

  get mousePX(): number {
    return this.mouseX / this.width;
  }

  get mousePY(): number {
    return this.mouseY / this.height;
  }

  get cardStyle() {
    const rX = this.mousePX * 30;
    const rY = this.mousePY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }

  get cardBgTransform() {
    const tX = this.mousePX * -40;
    const tY = this.mousePY * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  }

  get cardBgImage() {
    return {
      backgroundImage: `url(${this.dataImage})`
    };
  }

  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.pageX - this.cardRef.nativeElement.offsetLeft - this.width / 2;
    this.mouseY = event.pageY - this.cardRef.nativeElement.offsetTop - this.height / 2;
  }

  handleMouseEnter() {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseLeave() {
    this.mouseLeaveDelay = setTimeout(() => {
      this.mouseX = 0;
      this.mouseY = 0;
    }, 1000);
  }
}
