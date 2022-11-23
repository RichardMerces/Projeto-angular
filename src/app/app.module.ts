import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { DetalhesComponent } from './listar/detalhes/detalhes.component';
import { ListarService } from './listar/listar.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
