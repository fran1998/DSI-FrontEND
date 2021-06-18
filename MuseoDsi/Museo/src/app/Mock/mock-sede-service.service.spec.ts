import { TestBed } from '@angular/core/testing';

import { MockSedeServiceService } from './mock-sede-service.service';

describe('MockSedeServiceService', () => {
  let service: MockSedeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSedeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
