import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import { ActivatedRoute, Router } from '@angular/router';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail:';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += id.toString();
    this.product = {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': new Date('March 18, 2016'),
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    };
  }

  backPage() {
    this.router.navigate(['/products']);
  }
}
