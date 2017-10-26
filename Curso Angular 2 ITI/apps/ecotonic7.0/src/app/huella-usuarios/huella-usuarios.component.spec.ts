import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuellaUsuariosComponent } from './huella-usuarios.component';

describe('HuellaUsuariosComponent', () => {
  let component: HuellaUsuariosComponent;
  let fixture: ComponentFixture<HuellaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuellaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuellaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
