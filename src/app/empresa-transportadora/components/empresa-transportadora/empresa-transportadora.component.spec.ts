import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaTransportadoraComponent } from './empresa-transportadora.component';

describe('EmpresaTransportadoraComponent', () => {
  let component: EmpresaTransportadoraComponent;
  let fixture: ComponentFixture<EmpresaTransportadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaTransportadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
