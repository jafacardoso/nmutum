import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelasListComponent } from './components/tabelas-list/tabelas-list.component';
import { TabelaDetailsComponent } from './components/tabela-details/tabela-details.component';
import { AddTabelaComponent } from './components/add-tabela/add-tabela.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabelas', pathMatch: 'full' },
  { path: 'tabelas', component: TabelasListComponent },
  { path: 'tabelas/:id', component: TabelaDetailsComponent },
  { path: 'add', component: AddTabelaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
