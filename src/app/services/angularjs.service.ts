import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularjsService {

  private $injector: any

  constructor() { 
    console.log('AngularjsService ====================')

    this.$injector = (window as any).angular?.element(document.body).injector();
    this.registeronLogoutCallback()

  }

  getResource(name: string): any | null {
    return this.$injector?.has(name) ? this.$injector.get(name) : null;
  }

  registeronLogoutCallback() {
    console.log('registered callback')
    const userLogout = this.getResource('UserEventService');
    userLogout?.onLogout((event: any) => {
      console.log('angular onlogout called')
    })
  }
  
}
