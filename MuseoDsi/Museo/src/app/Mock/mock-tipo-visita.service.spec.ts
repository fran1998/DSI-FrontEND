import { TestBed } from '@angular/core/testing';

import { MockTipoVisitaService } from './mock-tipo-visita.service';

describe('TipoVisitaService', () => {
  let service: MockTipoVisitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTipoVisitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
