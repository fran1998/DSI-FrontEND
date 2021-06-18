import { TestBed } from '@angular/core/testing';

import { MockEscuelaService } from './mock-escuela.service';

describe('MockEscuelaService', () => {
  let service: MockEscuelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockEscuelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
