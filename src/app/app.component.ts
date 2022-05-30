import { Component, EventEmitter, Injector, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AngularjsService } from './services/angularjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private angularService: AngularjsService) {
    this.router.initialNavigation();
    // this.router.navigate([{outlets:{auth:'auth', primary: null}}])
    this.router.navigate(['/auth'])
  }
  
}
