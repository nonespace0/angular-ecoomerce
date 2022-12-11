import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidregisterComponent } from './formvalidregister.component';

describe('FormvalidregisterComponent', () => {
  let component: FormvalidregisterComponent;
  let fixture: ComponentFixture<FormvalidregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvalidregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormvalidregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
