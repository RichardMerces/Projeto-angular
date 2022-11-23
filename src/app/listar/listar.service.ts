import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private computadores: any[] = [
    {id: 1, marca: 'Marca 01', modelo: 'totm03033', placaMae: 'Asus', memoriaRam: '4gb', hd: '1tb', marcaHd: 'Sea Gate', velProcessador: '8Ghz', foto: 'imagem.jpg'},
    {id: 2, marca: 'Marca 02', modelo: 'totm03033', placaMae: 'Asus', memoriaRam: '4gb', hd: '1tb', marcaHd: 'Sea Gate', velProcessador: '8Ghz', foto: 'imagem.jpg'},
    {id: 3, marca: 'Marca 03', modelo: 'totm03033', placaMae: 'Asus', memoriaRam: '4gb', hd: '1tb', marcaHd: 'Sea Gate', velProcessador: '8Ghz', foto: 'imagem.jpg'},
    {id: 4, marca: 'Marca 04', modelo: 'totm03033', placaMae: 'Asus', memoriaRam: '4gb', hd: '1tb', marcaHd: 'Sea Gate', velProcessador: '8Ghz', foto: 'imagem.jpg'}
  ];

  constructor() { }

  getComputers(){
    return this.computadores;
  }
  
  getDetalhes(id: number){
    for (let i = 0; i < this.computadores.length; i++) {
      let pc = this.computadores[i];
      if(pc.id == id) {
        return pc;
      }
    }
    return null;
  }
}
