import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHuellaComponent } from './mi-huella.component';

describe('MiHuellaComponent', () => {
  let component: MiHuellaComponent;
  let fixture: ComponentFixture<MiHuellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiHuellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiHuellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
