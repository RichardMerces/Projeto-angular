import { Component, OnInit } from '@angular/core';
import { ListarService } from './listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public computadores: any[] = [];

  constructor(private listarService: ListarService) { }

  ngOnInit(): void {
    this.computadores = this.listarService.getComputers();
  }

}
