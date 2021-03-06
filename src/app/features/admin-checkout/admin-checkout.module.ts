import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { AdminCheckoutComponent } from '@app/features/admin-checkout/admin-checkout.component';
import { AdminOrderRoutingModule } from '@app/features/admin-checkout/admin-checkout-routing.module';
import { CheckoutStepsModule } from '@app/features/admin-checkout/checkout-steps/checkout-steps.module';
import { StepSummaryModule } from '@app/features/admin-checkout/summaries/step-summary/step-summary.module';
import { OrderSummaryModule } from '@app/features/admin-checkout/summaries/order-summary/order-summary.module';
import { CheckoutCompletedModule } from '@app/features/admin-checkout/checkout-completed/checkout-summary.module';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  RouterModule,
  AdminOrderRoutingModule,
  OrderSummaryModule,
  CheckoutCompletedModule,
  CheckoutStepsModule,
  StepSummaryModule,
];

@NgModule({
  imports: [...modules],
  declarations: [AdminCheckoutComponent],
})
export class AdminCheckoutModule {}
