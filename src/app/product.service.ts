import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateProduct } from './create-product.interface';
import { IProduct } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // baseApiUrl = 'http://localhost:3000/products';
  // baseApiUrl = 'https://nest-rest-api-mongodb-crud.onrender.com/products';

  baseApiUrl =
    'https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products';

  getAll() {
    return this.httpClient.get<IProduct[]>(this.baseApiUrl);
  }

  create(product: ICreateProduct) {
    return this.httpClient.post(this.baseApiUrl, product);
  }

  edit(_id: number) {
    return this.httpClient.get<IProduct>(
      `https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products/${_id}`
    );
  }

  update(val: IProduct) {
    return this.httpClient.put<IProduct>(
      `https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products/${val._id}`,
      val
    );
  }

  remove(_id: number) {
    return this.httpClient.delete<IProduct>(
      `https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products/${_id}`
    );
  }
}
