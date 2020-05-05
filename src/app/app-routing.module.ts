import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from '@auth/guards/can-suscriptor.guard';
import { CanEditGuard } from '@auth/guards/can-edit.guard';
import { SendEmailComponent } from '@auth/send-email/send-email.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [CanAdminGuard],
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./editor/editor.module').then((m) => m.EditorModule),
    canActivate: [CanEditGuard],
  },
  {
    path: 'suscriptor',
    loadChildren: () =>
      import('./suscriptor/suscriptor.module').then((m) => m.SuscriptorModule),
    canActivate: [CanSuscriptorGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
