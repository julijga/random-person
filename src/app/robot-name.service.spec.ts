import { TestBed, inject } from '@angular/core/testing';

import { RobotNameServiceService } from './robot-name.service';

describe('RobotNameServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotNameServiceService]
    });
  });

  it('should be created', inject([RobotNameServiceService], (service: RobotNameServiceService) => {
    expect(service).toBeTruthy();
  }));
});
