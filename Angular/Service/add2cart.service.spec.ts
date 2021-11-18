import { TestBed } from '@angular/core/testing';

import { Add2cartService } from './add2cart.service';

describe('Add2cartService', () => {
  let service: Add2cartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Add2cartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
