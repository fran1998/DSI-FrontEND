import { TestBed } from '@angular/core/testing';

import { PublicoDestinoService } from './publico-destino.service';

describe('PublicoDestinoService', () => {
  let service: PublicoDestinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicoDestinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
