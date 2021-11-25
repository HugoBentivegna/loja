import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  produtos:Produto[] = []
  total:number = 0

  constructor(public carrinhoService:CarrinhoService) { }

  ngOnInit(): void {
    this.produtos = this.carrinhoService.carrinho
  }

}
