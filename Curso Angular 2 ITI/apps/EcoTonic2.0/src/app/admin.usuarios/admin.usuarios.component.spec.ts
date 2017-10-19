import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.UsuariosComponent } from './admin.usuarios.component';

describe('Admin.UsuariosComponent', () => {
  let component: Admin.UsuariosComponent;
  let fixture: ComponentFixture<Admin.UsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.UsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
