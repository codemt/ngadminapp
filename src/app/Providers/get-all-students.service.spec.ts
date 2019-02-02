import { TestBed, inject } from '@angular/core/testing';

import { GetAllStudentsService } from './get-all-students.service';

describe('GetAllStudentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllStudentsService]
    });
  });

  it('should be created', inject([GetAllStudentsService], (service: GetAllStudentsService) => {
    expect(service).toBeTruthy();
  }));
});
