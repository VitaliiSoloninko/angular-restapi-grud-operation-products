import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/update/:id', component: UpdateComponent },
];
