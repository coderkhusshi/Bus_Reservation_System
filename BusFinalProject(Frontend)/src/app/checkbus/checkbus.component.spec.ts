import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbusComponent } from './checkbus.component';

describe('CheckbusComponent', () => {
  let component: CheckbusComponent;
  let fixture: ComponentFixture<CheckbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
