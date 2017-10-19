import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisgasesComponent } from './misgases.component';

describe('MisgasesComponent', () => {
  let component: MisgasesComponent;
  let fixture: ComponentFixture<MisgasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisgasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisgasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
