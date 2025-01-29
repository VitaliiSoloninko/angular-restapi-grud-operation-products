import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.interface';
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

  formData: Product = {
    _id: '',
    title: '',
    price: 0,
    __v: 0,
  };

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((param) => {
      let _id = Number(param.get('_id'));
      this.getById(_id);
    });
  }

  getById(_id: number) {
    this.productService.edit(_id).subscribe((val) => {
      this.formData = val;
    });
  }

  update() {
    this.productService.update(this.formData).subscribe({
      next: (val) => {
        this.router.navigate(['/products']);
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
