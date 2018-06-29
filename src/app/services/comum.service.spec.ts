import { TestBed, inject } from '@angular/core/testing';

import { ComumService } from './comum.service';

describe('ComumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComumService]
    });
  });

  it('should be created', inject([ComumService], (service: ComumService) => {
    expect(service).toBeTruthy();
  }));
});
