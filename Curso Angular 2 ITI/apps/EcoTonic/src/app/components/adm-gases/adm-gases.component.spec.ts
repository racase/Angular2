import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmGasesComponent } from './adm-gases.component';

describe('AdmGasesComponent', () => {
  let component: AdmGasesComponent;
  let fixture: ComponentFixture<AdmGasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmGasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmGasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
