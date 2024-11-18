import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteDashboardComponent } from '../cliente-dashboard/cliente-dashboard.component';

const routes: Routes = [
  {path: '', component: ClienteDashboardComponent},
  {path: 'cliente-lista', data: {breadcrumb: 'cliente-lista'}, component: ClienteListaComponent},
  {path: 'cliente-formulario', data: {breadcrumb: 'cliente-lista'}, component: ClienteFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
