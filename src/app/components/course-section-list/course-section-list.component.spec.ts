import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSectionListComponent } from './course-section-list.component';

describe('TutorialsListComponent', () => {
  let component: CourseSectionListComponent;
  let fixture: ComponentFixture<CourseSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseSectionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
