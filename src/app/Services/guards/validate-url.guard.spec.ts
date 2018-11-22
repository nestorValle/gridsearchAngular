import { TestBed, async, inject } from '@angular/core/testing';

import { ValidateURLGuard } from './validate-url.guard';

describe('ValidateURLGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateURLGuard]
    });
  });

  it('should ...', inject([ValidateURLGuard], (guard: ValidateURLGuard) => {
    expect(guard).toBeTruthy();
  }));
});
