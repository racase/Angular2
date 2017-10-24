import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.AguaComponent } from './admin.agua.component';

describe('Admin.AguaComponent', () => {
  let component: Admin.AguaComponent;
  let fixture: ComponentFixture<Admin.AguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.AguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.AguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
