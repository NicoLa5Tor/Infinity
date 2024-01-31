import { Injectable } from '@angular/core';
import Aos from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AOSInitService {

  constructor() { }
  Init(){
    Aos.init();
  }
  Refresh(){
    Aos.refresh();
  }
}
