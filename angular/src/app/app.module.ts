import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTabelaComponent } from './components/add-tabela/add-tabela.component';
import { TabelaDetailsComponent } from './components/tabela-details/tabela-details.component';
import { TabelasListComponent } from './components/tabelas-list/tabelas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTabelaComponent,
    TabelaDetailsComponent,
    TabelasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
