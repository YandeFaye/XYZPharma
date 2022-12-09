
import { Injectable } from '@angular/core';

import { PRODUCTS } from './mock-product';

import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(){}

  
  getAllProducts():Product[]{
    return PRODUCTS;
  }
  

  getProductByName(productName:string):Product|undefined{ 
    return PRODUCTS.find(product => product.name ==productName); 
  }
  
}
