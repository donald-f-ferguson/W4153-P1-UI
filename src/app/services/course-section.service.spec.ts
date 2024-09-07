import { TestBed } from '@angular/core/testing';

import { CourseSectionService } from './course-section.service';

describe('TutorialService', () => {
  let service: CourseSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
