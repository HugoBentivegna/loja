import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';


const routes: Routes = [
  { path: 'lista-produtos', component: ListaProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '',   redirectTo: '/lista-produtos', pathMatch: 'full' }, // redirect to
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
