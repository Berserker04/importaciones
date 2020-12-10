import { TestBed } from '@angular/core/testing';

import { TipoMercanciaService } from './tipo-mercancia.service';

describe('TipoMercanciaService', () => {
  let service: TipoMercanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMercanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
