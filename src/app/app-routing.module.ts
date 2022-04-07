import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ProyectsComponent } from './components/pages//proyects/proyects.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'proyects/:id', component:ProyectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
