import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AngularjsService } from 'src/app/services/angularjs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() title = 'angular-elements';

  @Input() emailId: string = ''

  @Input() password: string = ''

  @Input() switchOrgParams: any = {}

  @Input() ajsState: any

  @Output() credentials: EventEmitter<{emailId: string, password: string}> = new EventEmitter()

  
  constructor(private router: Router, private angularJSService: AngularjsService) {

  }

  ngOnInit(): void {
  }


  setEou() {
    let promise: Promise<any>;
    const authServive = this.angularJSService.getResource('AuthService')
    if (authServive.getEou()) {
      promise = Promise.resolve('')
    } else {
      promise = authServive.refreshEou();
    }

    return promise;
  }


  onSubmit() {
    console.log('onSubmit called', this.emailId, this.password)
    // this.credentials.emit({emailId: this.emailId, password: this.password})
    // this.ajsState.go('switch_org', this.switchOrgParams)
    const routerAuthService = this.angularJSService.getResource('RouterAuthService')
    routerAuthService.basicSignin(this.emailId, this.password).then(() => {
      this.setEou().then(() => {
        this.ajsState.go('switch_org')
      })
    })
    // this.router.navigate(['auth/switch_org'])
    // this.router.navigate([{outlets: { primary: null,auth: 'auth/switch_org'}}])


  }




}
