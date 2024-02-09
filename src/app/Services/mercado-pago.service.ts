import { Inject, Injectable } from '@angular/core';
import {environment} from '../Environment/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreferenceModel } from '../Models/PreferenceModel';
@Injectable({
  
  providedIn: 'root'
})
export class MercadoPagoService {
  environ = environment.backEnd
  url = this.environ + 'Preference';
  constructor(@Inject(HttpClient) private http : HttpClient) { }
  Preference(model : PreferenceModel) : Observable<any>{
  console.log("url: ",this.url)
    return this.http.post<any>(`${this.url}`,model)
  }
}
