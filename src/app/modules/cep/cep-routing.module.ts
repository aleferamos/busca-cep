import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BuscarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepRoutingModule { }
