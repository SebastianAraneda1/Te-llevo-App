import { TestBed } from '@angular/core/testing';

import { PageProtegidaGuard } from './page-protegida.guard';

describe('PageProtegidaGuard', () => {
  let guard: PageProtegidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageProtegidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
