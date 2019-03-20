import { TestBed } from '@angular/core/testing';

import { JobCardService } from './jobcard.service';

describe('JobcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobCardService = TestBed.get(JobCardService);
    expect(service).toBeTruthy();
  });
});
