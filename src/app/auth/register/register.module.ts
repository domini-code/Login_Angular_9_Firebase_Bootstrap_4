import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from '@auth/register/register-routing.module';
import { RegisterComponent } from '@auth/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule],
})
export class RegisterModule {}
