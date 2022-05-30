import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SwitchOrgComponent } from './switch-org/switch-org.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    // outlet: 'auth'
  },
  {
    path: 'switch_org',
    component: SwitchOrgComponent,
    // outlet:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  // imports: [RouterTestingModule.withRoutes(routes)],
  // exports: [RouterTestingModule]
})
export class AuthRoutingModule { }
