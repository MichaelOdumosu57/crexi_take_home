import { TestBed } from '@angular/core/testing';

import { ProfileDetailCardService } from './profile-detail-card.service';

describe('ProfileDetailCardService', () => {
  let service: ProfileDetailCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetailCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
