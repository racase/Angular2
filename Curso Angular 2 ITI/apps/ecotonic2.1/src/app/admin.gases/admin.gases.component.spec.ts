import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.GasesComponent } from './admin.gases.component';

describe('Admin.GasesComponent', () => {
  let component: Admin.GasesComponent;
  let fixture: ComponentFixture<Admin.GasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.GasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.GasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
