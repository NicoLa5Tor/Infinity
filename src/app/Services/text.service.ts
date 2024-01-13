import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  tittle = "";
  constructor() { }
  setTittle(dat : string){
  this.tittle
  }
  getTittle(){
    return this.tittle
  }
}
