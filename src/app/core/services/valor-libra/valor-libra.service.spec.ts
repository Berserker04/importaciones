import { TestBed } from '@angular/core/testing';

import { ValorLibraService } from './valor-libra.service';

describe('ValorLibraService', () => {
  let service: ValorLibraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorLibraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
