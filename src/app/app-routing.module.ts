import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ClientListComponent } from './components/private/admin/client/client-list/client-list.component';
import { OrdersDetailsComponent } from './components/private/admin/order/orders-details/orders-details.component';
import { OrdersListComponent } from './components/private/admin/order/orders-list/orders-list.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { MyOrderDetailsComponent } from './components/private/client/order/my-order-details/my-order-details.component';
import { MyOrderListComponent } from './components/private/client/order/my-order-list/my-order-list.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  {path: '',   redirectTo: 'home', pathMatch: 'full'},  
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin/category/list', component: CategoriesListComponent},
  {path: 'admin/category/add', component: CategoryAddComponent},
  {path: 'admin/category/update/:id', component: CategoryUpdateComponent},
  {path: 'admin/product/list', component: ProductListComponent},
  {path: 'admin/product/add', component: ProductAddComponent},
  {path: 'admin/product/update/:id', component: ProductUpdateComponent},
  {path: 'admin/order/list', component: OrdersListComponent},
  {path: 'admin/order/details', component: OrdersDetailsComponent},
  {path: 'admin/client/list', component: ClientListComponent},
  {path: 'client/order/list', component: MyOrderListComponent},
  {path: 'client/order/details', component: MyOrderDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
