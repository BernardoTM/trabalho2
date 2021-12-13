import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosCrudComponent } from './medicos-crud.component';

describe('MedicosCrudComponent', () => {
  let component: MedicosCrudComponent;
  let fixture: ComponentFixture<MedicosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
