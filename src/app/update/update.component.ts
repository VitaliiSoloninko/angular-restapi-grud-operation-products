import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  formData: IProduct = {
    title: '',
    price: 0,
    _id: '',
  };

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((param) => {
      let id: string = String(param.get('id'));
      this.getById('id');
    });
  }

  getById(id: string) {
    this.productService.edit(id).subscribe((product) => {
      this.formData = product;
    });
  }

  update() {
    this.productService.update(this.formData).subscribe({
      next: (product) => {
        this.router.navigate(['/products']);
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
