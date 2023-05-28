import { TestBed } from '@angular/core/testing';

import { AdminUnauthGuardService } from './admin-unauth-guard.service';

describe('AdminUnauthGuardService', () => {
  let service: AdminUnauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUnauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
