import { TestBed } from '@angular/core/testing';

import { CatchService } from './catch.service';

describe('CatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatchService = TestBed.get(CatchService);
    expect(service).toBeTruthy();
  });
});
