import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MedicosCrudComponent } from './views/medicos-crud/medicos-crud.component';
import { CadastroComponent } from './components/medicos/cadastro/cadastro.component';
import { ListaComponent } from './components/medicos/lista/lista.component';
import { MededicoDeleteComponent } from './components/medicos/mededico-delete/mededico-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "medicos",
    component: MedicosCrudComponent
  },
  {
    path: "cadastroMedico",
    component: CadastroComponent
  },
  {
    path: "fila",
    component: ListaComponent
  },
  {
    path: "medicos/delete/:id",
    component: MededicoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
