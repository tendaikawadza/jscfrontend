import { TestBed } from '@angular/core/testing';

import { AuthenticationSkipTestsGuard } from './authentication--skip-tests.guard';

describe('AuthenticationSkipTestsGuard', () => {
  let guard: AuthenticationSkipTestsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationSkipTestsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
