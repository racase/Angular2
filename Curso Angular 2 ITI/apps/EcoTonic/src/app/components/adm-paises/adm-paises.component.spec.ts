import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPaisesComponent } from './adm-paises.component';

describe('AdmPaisesComponent', () => {
  let component: AdmPaisesComponent;
  let fixture: ComponentFixture<AdmPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
