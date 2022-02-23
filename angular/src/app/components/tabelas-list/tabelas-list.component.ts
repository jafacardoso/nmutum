import { Component, OnInit } from '@angular/core';
import { Tabela } from 'src/app/models/tabela.model';
import { TabelaService } from 'src/app/services/tabela.service';

@Component({
  selector: 'app-tabelas-list',
  templateUrl: './tabelas-list.component.html',
  styleUrls: ['./tabelas-list.component.css']
})
export class TabelasListComponent implements OnInit {

  tabelas?: Tabela[];
  currentTabela: Tabela = {};
  currentIndex = -1;
  title = '';

  constructor(private tabelaService: TabelaService) { }

  ngOnInit(): void {
    this.retrieveTabelas();
  }

  retrieveTabelas(): void {
    this.tabelaService.getAll()
      .subscribe({
        next: (data) => {
          this.tabelas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTabelas();
    this.currentTabela = {};
    this.currentIndex = -1;
  }

  setActiveTabela(tabela: Tabela, index: number): void {
    this.currentTabela = tabela;
    this.currentIndex = index;
  }

  removeAllTabelas(): void {
    this.tabelaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTabela = {};
    this.currentIndex = -1;

    this.tabelaService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tabelas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
