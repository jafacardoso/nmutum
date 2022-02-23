import { Component, Input, OnInit } from '@angular/core';
import { TabelaService } from 'src/app/services/tabela.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tabela } from 'src/app/models/tabela.model';

@Component({
  selector: 'app-tabela-details',
  templateUrl: './tabela-details.component.html',
  styleUrls: ['./tabela-details.component.css']
})
export class TabelaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTabela: Tabela = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private TabelaService: TabelaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTabela(this.route.snapshot.params["id"]);
    }
  }

  getTabela(id: string): void {
    this.TabelaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTabela = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTabela.title,
      description: this.currentTabela.description,
      published: status
    };

    this.message = '';

    this.TabelaService.update(this.currentTabela.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTabela.published = status;
          this.message = res.message ? res.message : 'O status alterado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTabela(): void {
    this.message = '';

    this.TabelaService.update(this.currentTabela.id, this.currentTabela)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'A tabela alterada com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTabela(): void {
    this.TabelaService.delete(this.currentTabela.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tabelas']);
        },
        error: (e) => console.error(e)
      });
  }

}
