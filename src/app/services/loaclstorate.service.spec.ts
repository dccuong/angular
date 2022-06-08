import { TestBed } from '@angular/core/testing';

import { LoaclstorateService } from '../services/loaclstorate.service';

describe('LoaclstorateService', () => {
  let service: LoaclstorateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaclstorateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
