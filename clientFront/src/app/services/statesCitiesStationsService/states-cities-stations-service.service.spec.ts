import { TestBed } from '@angular/core/testing';

import { StatesCitiesStationsService } from './states-cities-stations.service';

describe('StatesCitiesStationsServiceService', () => {
  let service: StatesCitiesStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesCitiesStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
