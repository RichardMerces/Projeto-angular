
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'atualizar/:id', component: AtualizarComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'listar', component: ListarComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
