import { Routes } from '@angular/router';
import { AgendCitaComponent } from './Views/ViewsChild/agend-cita/agend-cita.component';
import { BoddyComponent } from './Views/Boddy/boddy/boddy.component';
import { NosotrosComponent } from './Views/ViewsChild/nosotros/nosotros.component';

export const routes: Routes = [
    {path:'agendCita', component: AgendCitaComponent},
    {path:'inicio', component:BoddyComponent},
    {path: 'nosotros',component:NosotrosComponent},
    {path: '**', redirectTo:'/inicio'}
];
