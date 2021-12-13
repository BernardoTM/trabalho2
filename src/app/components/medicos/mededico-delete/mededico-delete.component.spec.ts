import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MededicoDeleteComponent } from './mededico-delete.component';

describe('MededicoDeleteComponent', () => {
  let component: MededicoDeleteComponent;
  let fixture: ComponentFixture<MededicoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MededicoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MededicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
