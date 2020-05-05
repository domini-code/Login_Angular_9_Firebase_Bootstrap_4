import { TestBed } from '@angular/core/testing';

import { CanEditGuard } from './can-edit.guard';

describe('CanEditGuard', () => {
  let guard: CanEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
