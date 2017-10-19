import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaguaComponent } from './miagua.component';

describe('MiaguaComponent', () => {
  let component: MiaguaComponent;
  let fixture: ComponentFixture<MiaguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
