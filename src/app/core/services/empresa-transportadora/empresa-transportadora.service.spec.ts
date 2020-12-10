import { TestBed } from '@angular/core/testing';

import { EmpresaTransportadoraService } from './empresa-transportadora.service';

describe('EmpresaTransportadoraService', () => {
  let service: EmpresaTransportadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaTransportadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
