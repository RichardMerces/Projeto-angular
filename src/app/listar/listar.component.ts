import { Component, OnInit } from '@angular/core';
import { Computadores } from '../interfaces/computadores';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  compLista: Computadores [];

  constructor() {
    this.compLista = [];
  }

  ngOnInit(): void {
    const estoque = localStorage.getItem('pc_db');
    if(estoque !== null) {
      this.compLista = JSON.parse(estoque);
      console.log(this.compLista)
    }
  }

  excluir(id: any) {
    const estoqueAnt = localStorage.getItem('pc_db');
    if (estoqueAnt !== null) {
      const pc_db = JSON.parse(estoqueAnt);
      pc_db.splice(pc_db.findIndex((a: any)=> a.id == id),1);
      localStorage.setItem('pc_db', JSON.stringify(pc_db));
    }
    const estoque = localStorage.getItem('pc_db');
    if(estoque !== null) {
      this.compLista = JSON.parse(estoque);

    }
  }

}
