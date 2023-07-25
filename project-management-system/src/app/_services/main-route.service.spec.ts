import { TestBed } from '@angular/core/testing';

import { MainRouteService } from './main-route.service';

describe('MainRouteService', () => {
  let service: MainRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
