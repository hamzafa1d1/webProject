import { TestBed } from '@angular/core/testing';

import { FacebookAccountService } from './facebook-account.service';

describe('FacebookAccountService', () => {
  let service: FacebookAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
