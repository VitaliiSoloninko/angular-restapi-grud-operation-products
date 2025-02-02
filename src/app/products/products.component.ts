import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IProduct } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  imports: [NgFor, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: IProduct[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }

  removeProduct(_id: string) {
    this.productService.remove(_id).subscribe({
      next: (val) => {
        this.products = this.products.filter(() => _id != _id);
      },
    });
  }
}
