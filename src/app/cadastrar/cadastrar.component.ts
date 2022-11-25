import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup, FormControl } from '@angular/forms';
import { Computadores } from '../interfaces/computadores';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  comp: Computadores;
  constructor(private router: Router) {
    this.comp = new Computadores()
  }

  ngOnInit(): void {
    
  }

  getNewComp() {
    const estoqueAnt = localStorage.getItem('pc_db');
    if(estoqueAnt !== null){
      const pc_db = JSON.parse(estoqueAnt);
      return pc_db.length + 1;
    } else {
      return 1;
    }
  }

  cadastrar() {
    const uid = this.getNewComp();
    this.comp.id = uid;
    const estoqueAnt = localStorage.getItem('pc_db');
    if (estoqueAnt !== null) {
      const pc_db = JSON.parse(estoqueAnt); 
      pc_db.push(this.comp);
      localStorage.setItem('pc_db', JSON.stringify(pc_db));
    }
    else {
      const compArray = [];
      compArray.push(this.comp);
      localStorage.setItem('pc_db', JSON.stringify(compArray));
    }
    this.router.navigateByUrl('/pc_db');
  }
}
