import { TestBed } from '@angular/core/testing';

import { HlitService } from './hlit.service';

describe('HlitService', () => {
  let service: HlitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HlitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
