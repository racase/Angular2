import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuellaComponent } from './huella.component';

describe('HuellaComponent', () => {
  let component: HuellaComponent;
  let fixture: ComponentFixture<HuellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
