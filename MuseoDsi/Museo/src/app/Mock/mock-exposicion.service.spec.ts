import { TestBed } from '@angular/core/testing';

import { MockExposicionService } from './mock-exposicion.service';

describe('MockExposicionService', () => {
  let service: MockExposicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockExposicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
