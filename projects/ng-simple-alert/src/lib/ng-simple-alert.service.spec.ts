import { TestBed } from '@angular/core/testing';

import { NgSimpleAlertService } from './ng-simple-alert.service';

describe('NgSimpleAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSimpleAlertService = TestBed.get(NgSimpleAlertService);
    expect(service).toBeTruthy();
  });
});
