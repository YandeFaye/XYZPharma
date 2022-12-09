import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from '../login/logincomponent';
import { BorderCardDirective } from './border-card.directive';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';


const productRoutes: Routes = [
  { path:'products', component:ListProductComponent },
  { path: 'product/:name', component:DetailProductComponent },
  { path:'', component:LoginComponent},
  
];

@NgModule({
  declarations: [
    ListProductComponent,
    DetailProductComponent,
    BorderCardDirective,
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
  providers:[ProductService]
})
export class ProductModule { }
