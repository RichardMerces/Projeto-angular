import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private computadores: any[] = [
    {id: 1, marca: 'Dell', modelo: 'Inspirion', placaMae: 'Placa-mãe dell', memoriaRam: '10gb', hd: '1tb', marcaHd: 'Kingston', velProcessador: '8Ghz', foto: 'imagem.jpg'},
    {id: 2, marca: 'Positivo', modelo: 'Motion', placaMae: 'Placa Positivo', memoriaRam: '8gb', hd: '1tb', marcaHd: 'Sea Gate', velProcessador: '6Ghz', foto: 'imagem.jpg'},
    {id: 3, marca: 'Acer', modelo: 'Aspire 5', placaMae: 'Placa Acer', memoriaRam: '16gb', hd: '2tb', marcaHd: 'Crucial', velProcessador: '10Ghz', foto: 'imagem.jpg'},
    {id: 4, marca: 'Samsung', modelo: 'Galaxy Book', placaMae: 'Placa-mãe Samsung', memoriaRam: '8gb', hd: '1tb', marcaHd: 'WDG', velProcessador: '8Ghz', foto: 'imagem.jpg'}
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
