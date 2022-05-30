import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('coming here----', this.router)
    // this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
    this.router.navigate(['/auth/login'])
    // this.router.navigate([{outlets: { auth: '/auth/login'}}])
    // this.router.navigate([{outlets: {primary: null, auth: '/auth/login'}}])
    // this.router.navigate([{outlets: { primary: null,auth: '/login'}}])
    // setTimeout(() => {
      // this.router.navigate([{outlets: { auth: 'auth/login'}}])
    // })
  }

}
