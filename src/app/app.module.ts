import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './components/detalhe-produto/detalhe-produto.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    DetalheProdutoComponent,
    ProdutoComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
