import { TestBed } from '@angular/core/testing';

import { PassengerDashboardService } from './passenger-dashboard.service';

describe('PassengerDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassengerDashboardService = TestBed.get(PassengerDashboardService);
    expect(service).toBeTruthy();
  });
});
