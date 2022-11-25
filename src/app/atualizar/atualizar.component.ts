import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Computadores } from '../interfaces/computadores';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {


  comp: Computadores;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    
    this.comp = new Computadores();
    this.route.params.subscribe((res)=> {
      this.comp.id = res['id']
    });
  }

  ngOnInit() {
    const estoqueAnt = localStorage.getItem('pc_db');
    if (estoqueAnt !== null) {
      const pc_db = JSON.parse(estoqueAnt);
      const atcomp = pc_db.find((m: any) => m.id == this.comp.id);
      if (atcomp !== undefined){
        this.comp.marca = atcomp.marca;
        this.comp.modelo = atcomp.modelo;
        this.comp.placaMae = atcomp.placaMae;
        this.comp.memoriaRam = atcomp.memoriaRam;
        this.comp.hd = atcomp.hd;
        this.comp.marcaHd = atcomp.marcaHd;
        this.comp.velProcessador = atcomp.velProcessador;
        this.comp.foto = atcomp.foto;
      }
    }
  }

  atualizar() {
    const estoqueAnt = localStorage.getItem('pc_db');
    if (estoqueAnt !== null) {
      const pc_db = JSON.parse(estoqueAnt);
      pc_db.splice(pc_db.findIndex((a: any)=>a.id == this.comp.id),1);
      pc_db.push(this.comp);
      localStorage.setItem('pc_db', JSON.stringify(pc_db));
    }
    this.router.navigateByUrl('pc_db');
  }
}
