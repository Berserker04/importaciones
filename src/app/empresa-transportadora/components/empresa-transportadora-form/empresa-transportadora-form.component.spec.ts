import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaTransportadoraFormComponent } from './empresa-transportadora-form.component';

describe('EmpresaTransportadoraFormComponent', () => {
  let component: EmpresaTransportadoraFormComponent;
  let fixture: ComponentFixture<EmpresaTransportadoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaTransportadoraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaTransportadoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
