import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MihuellaComponent } from './mihuella.component';

describe('MihuellaComponent', () => {
  let component: MihuellaComponent;
  let fixture: ComponentFixture<MihuellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MihuellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MihuellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
