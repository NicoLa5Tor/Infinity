import { Routes } from '@angular/router';
import { AgendCitaComponent } from './Views/ViewsChild/agend-cita/agend-cita.component';
import { BoddyComponent } from './Views/Boddy/boddy/boddy.component';

export const routes: Routes = [
    {path:'agendCita', component: AgendCitaComponent},
    {path:'inicio', component:BoddyComponent},
    {path: '**', redirectTo:'/inicio'}
];
