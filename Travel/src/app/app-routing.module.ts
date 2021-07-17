import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: "travels",component: ProductListComponent
  },
  {
    path: "products/:id", component: ProductDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
