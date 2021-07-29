import { TestBed } from '@angular/core/testing';

import { ContactInformationServiceService } from './contact-information-service.service';

describe('ContactInformationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactInformationServiceService = TestBed.get(ContactInformationServiceService);
    expect(service).toBeTruthy();
  });
});
