
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'listar', loadChildren: () => import("./listar/listar-routing.module").then(mod => mod.ListarRoutingModule) },
  { path: 'novo', component: CadastrarComponent},
  { path: '', pathMatch:'full', redirectTo: 'listar'},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/* 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */
export class AppRoutingModule { }
