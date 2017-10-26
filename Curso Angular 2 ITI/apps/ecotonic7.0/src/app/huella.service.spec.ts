import { TestBed, inject } from '@angular/core/testing';

import { HuellaService } from './huella.service';

describe('HuellaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HuellaService]
    });
  });

  it('should be created', inject([HuellaService], (service: HuellaService) => {
    expect(service).toBeTruthy();
  }));
});
