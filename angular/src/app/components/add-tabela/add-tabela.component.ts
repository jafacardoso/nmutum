import { Component, OnInit } from '@angular/core';
import { Tabela } from 'src/app/models/tabela.model';
import { TabelaService } from 'src/app/services/tabela.service';

@Component({
  selector: 'app-add-tabela',
  templateUrl: './add-tabela.component.html',
  styleUrls: ['./add-tabela.component.css']
})
export class AddTabelaComponent implements OnInit {

  tabelam: Tabela = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tabelaService: TabelaService) { }

  ngOnInit(): void {
  }

  saveTabela(): void {
    const data = {
      title: this.tabelam.title,
      description: this.tabelam.description
    };

    this.tabelaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTabela(): void {
    this.submitted = false;
    this.tabelam = {
      title: '',
      description: '',
      published: false
    };
  }

}
