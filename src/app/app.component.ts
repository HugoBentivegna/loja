import { Component } from '@angular/core';
import { BuscaService } from './services/busca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  valorBusca:string=''

  constructor(public buscaService:BuscaService) { }


  title = 'loja';
}
