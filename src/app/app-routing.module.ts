import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './shop/components/core/core.component';
import { ProductDetailComponent } from './shop/components/product-detail/product-detail.component';
import { ProductListComponent } from './shop/components/product-list/product-list.component';
import { AdminCoreComponent } from './admin/components/admin-core/admin-core.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminProductCreateComponent } from './admin/components/product/admin-product-create/admin-product-create.component';
import { AdminProductListComponent } from './admin/components/product/admin-product-list/admin-product-list.component';

import { RegisterComponent } from './auth/components/register/register.component';
import { ShoppingCartComponent } from './shop/components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';
import { CheckoutSuccessComponent } from './shop/components/checkout-success/checkout-success.component';
import { OrderListComponent } from './shop/components/order-list/order-list.component';
import { AdminOrderListComponent } from './admin/components/order/admin-order-list/admin-order-list.component';
import { AdminProductUpdateComponent } from './admin/components/product/admin-product-update/admin-product-update.component';
import { AdminProductReviewsComponent } from './admin/components/product/admin-product-reviews/admin-product-reviews.component';
import { AdminGuard, LoginGuard } from './guards/role.guard';
import { AdminPaymentListComponent } from './admin/components/payment/admin-payment-list/admin-payment-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [{
        path: '', component: ProductListComponent
      },
      {
        path: 'products/:id', component: ProductDetailComponent
      },
      {
        path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [LoginGuard]
      },
      {
        path: 'checkout', component: CheckoutComponent, canActivate: [LoginGuard]
      },
      {
        path: 'checkout/done', component: CheckoutSuccessComponent, canActivate: [LoginGuard]
      },
      {
        path: 'order/history', component: OrderListComponent, canActivate: [LoginGuard]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin',
    component: AdminCoreComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminProductListComponent
      },
      {
        path: 'products/create',
        component: AdminProductCreateComponent
      },
      {
        path: 'products/:id/update',
        component: AdminProductUpdateComponent
      },
      {
        path: 'products/:id/reviews',
        component: AdminProductReviewsComponent
      },
      {
        path: 'products',
        component: AdminProductListComponent
      },
      {
        path: 'orders',
        component: AdminOrderListComponent
      },
      {
        path: 'payments',
        component: AdminPaymentListComponent
      },

  ]
  },
  {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
