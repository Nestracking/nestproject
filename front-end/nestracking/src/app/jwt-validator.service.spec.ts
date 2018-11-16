import { TestBed } from '@angular/core/testing';

import { JwtValidatorService } from './jwt-validator.service';

describe('JwtValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtValidatorService = TestBed.get(JwtValidatorService);
    expect(service).toBeTruthy();
  });
});
