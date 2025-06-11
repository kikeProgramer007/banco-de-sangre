import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';
import { Clientes } from './pages/clientes/clientes';
//import { UsersComponent } from './pages/users/users.component';
//import { LoginComponent } from '../auth/login/login.component';

export const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users },
      { path: 'clientes', component: Clientes }
    ]
  },
  { 
    path: 'login', 
    loadComponent: () => import('./auth/login/login').then(c => c.Login)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }