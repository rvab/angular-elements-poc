import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SwitchOrgComponent } from './switch-org/switch-org.component';

@NgModule({
  declarations: [
    LoginComponent,
    SwitchOrgComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  entryComponents: [LoginComponent, SwitchOrgComponent, AuthComponent],
  providers: []
})
export class AuthModule implements DoBootstrap { 

  constructor(injector: Injector) {

    // const authElement = createCustomElement(AuthComponent, {injector});
    // customElements.define('app-auth', authElement);

    // const loginElement = createCustomElement(LoginComponent, {injector});
    // customElements.define('app-login', loginElement);

    // const switchOrgElement = createCustomElement(SwitchOrgComponent, {injector});
    // customElements.define('app-switch-org', switchOrgElement);
    
  }

  ngDoBootstrap() {}

}
