import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseSectionComponent } from './add-course-section.component';

describe('AddTutorialComponent', () => {
  let component: AddCourseSectionComponent;
  let fixture: ComponentFixture<AddCourseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
