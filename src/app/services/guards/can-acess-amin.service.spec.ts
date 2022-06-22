import { TestBed } from '@angular/core/testing';

import { CanAcessAminService } from './can-acess-amin.service';

describe('CanAcessAminService', () => {
  let service: CanAcessAminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanAcessAminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
