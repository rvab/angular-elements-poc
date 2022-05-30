import { TestBed } from '@angular/core/testing';

import { AngularjsService } from './angularjs.service';

describe('AngularjsService', () => {
  let service: AngularjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
