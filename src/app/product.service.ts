import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // baseApiUrl = 'http://localhost:3000/products';
  baseApiUrl = 'https://nest-rest-api-mongodb-crud.onrender.com/products';

  getAll() {
    return this.httpClient.get<Product[]>(this.baseApiUrl);
  }

  create(val: Product) {
    return this.httpClient.post(this.baseApiUrl, val);
  }

  edit(_id: number) {
    return this.httpClient.get<Product>(
      `http://localhost:3000/products/${_id}`
    );
  }

  update(val: Product) {
    return this.httpClient.put<Product>(
      `http://localhost:3000/Products/${val._id}`,
      val
    );
  }

  remove(_id: number) {
    return this.httpClient.delete<Product>(
      `http://localhost:3000/products/${_id}`
    );
  }
}
