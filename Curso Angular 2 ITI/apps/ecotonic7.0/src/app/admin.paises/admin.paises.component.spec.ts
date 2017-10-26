import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.PaisesComponent } from './admin.paises.component';

describe('Admin.PaisesComponent', () => {
  let component: Admin.PaisesComponent;
  let fixture: ComponentFixture<Admin.PaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.PaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.PaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
