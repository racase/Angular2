import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAguaComponent } from './adm-agua.component';

describe('AdmAguaComponent', () => {
  let component: AdmAguaComponent;
  let fixture: ComponentFixture<AdmAguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
