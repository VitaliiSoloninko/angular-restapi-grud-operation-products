import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateProduct } from './create-product.interface';
import { IProduct } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // baseApiUrl = 'http://localhost:3000/products';
  // baseApiUrl = 'https://nest-rest-api-mongodb-crud.onrender.com/products';

  baseApiUrl =
    'https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products';

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseApiUrl);
  }

  create(product: ICreateProduct) {
    return this.http.post(this.baseApiUrl, product);
  }

  edit(_id: string) {
    return this.http.get<IProduct>(
      `https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products/${_id}}`
    );
  }

  update(val: IProduct) {
    return this.http.put<IProduct>(
      `https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products/${val._id}`,
      val
    );
  }

  remove(_id: string) {
    return this.http.delete<IProduct>(
      `https://nest-rest-api-mongodb-crud-production-c947.up.railway.app/products/${_id}`
    );
  }
}
