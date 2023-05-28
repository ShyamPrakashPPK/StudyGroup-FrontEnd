import { TestBed } from '@angular/core/testing';

import { UserUnauthGuardService } from './user-unauth-guard.service';

describe('UserUnauthGuardService', () => {
  let service: UserUnauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUnauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
