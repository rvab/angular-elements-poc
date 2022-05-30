import { APP_BASE_HREF } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SwitchOrgComponent } from './auth/switch-org/switch-org.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: []
})
export class AppModule implements DoBootstrap { 
  constructor(injector: Injector) {
    const appElement = createCustomElement(AppComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('app-root', appElement);

    const loginElement = createCustomElement(LoginComponent, {injector});
    customElements.define('app-login', loginElement);

    const switchOrgElement = createCustomElement(SwitchOrgComponent, {injector});
    customElements.define('app-switch-org', switchOrgElement);

    const authElement = createCustomElement(AuthComponent, {injector});
    customElements.define('app-auth', authElement);

    
  }

  ngDoBootstrap() {}

}
