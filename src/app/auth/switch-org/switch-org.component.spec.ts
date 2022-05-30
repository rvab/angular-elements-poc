import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOrgComponent } from './switch-org.component';

describe('SwitchOrgComponent', () => {
  let component: SwitchOrgComponent;
  let fixture: ComponentFixture<SwitchOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
