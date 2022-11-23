import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { ListarComponent } from "./listar.component";

const listarRoutes: Routes = [
    {path: '', component: ListarComponent, children: [
        {path: ':id', component: DetalhesComponent}
        
    ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(listarRoutes)],
    exports: [RouterModule]
})
export class ListarRoutingModule {}