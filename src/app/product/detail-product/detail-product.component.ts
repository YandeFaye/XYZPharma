import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  productList: Product[];
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {

    const productName: string | null = this.route.snapshot.paramMap.get('name');
    if (productName) {
      this.product = this.productService.getProductByName(productName);
    }
  }
  goToProductList() {
    this.router.navigate(['/products']);

  }

}
