import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

    productList: Product [];
    searchProducts:Product[];
    productSelected:Product|undefined;
  
    constructor(
      private router:Router,
      private productService:ProductService

      ){
  
    }
    ngOnInit(){
      console.table(this.productList);
      this.productList = this.productService.getAllProducts();
      this.searchProducts= this.productList;
      // this.productService.getAllProducts().subscribe(
      //   productList => this.productList = this.productList);
    }
  
    goToProduct(product:Product){
      this.router.navigate(['/product',product.name]);
    }
    selectProduct(productName:string){
    
      this.searchProducts = this.productList.filter(
        p=>p.name.toLowerCase().includes(productName.toLowerCase())
      )
    }
      
  }
  
  


