import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
      },
      (err) => {
        console.log(err);
        
      }
    )
  }

  getAllProducts() {
    this.productService.findAllProducts().subscribe(
      (result) => {
        this.products = result;
      },
      (err) => {
        console.log(err);
        
      }
    )
  }
}
