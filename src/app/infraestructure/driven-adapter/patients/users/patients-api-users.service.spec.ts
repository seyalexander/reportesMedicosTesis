import { TestBed } from '@angular/core/testing';

import { PatientsApiUsersService } from './patients-api-users.service';

describe('PatientsApiUsersService', () => {
  let service: PatientsApiUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsApiUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
