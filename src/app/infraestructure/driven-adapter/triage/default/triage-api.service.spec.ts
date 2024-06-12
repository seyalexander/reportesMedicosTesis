import { TestBed } from '@angular/core/testing';

import { TriageApiService } from './triage-api.service';

describe('TriageApiService', () => {
  let service: TriageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
