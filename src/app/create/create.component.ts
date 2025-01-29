import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  constructor(private productService: ProductService, private router: Router) {}

  formData: Product = {
    _id: '',
    title: '',
    price: 4,
  };

  create() {
    this.productService.create(this.formData).subscribe({
      next: (val) => {
        this.router.navigate(['/products']);
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
