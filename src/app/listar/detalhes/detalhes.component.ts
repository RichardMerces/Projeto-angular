import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListarService } from '../listar.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit, OnDestroy {

  computador: any;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private listarService: ListarService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.computador = this.listarService.getDetalhes(id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
