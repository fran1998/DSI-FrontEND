import { TestBed } from '@angular/core/testing';

import { TipoExposicionService } from './tipo-exposicion.service';

describe('TipoExposicionService', () => {
  let service: TipoExposicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoExposicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
