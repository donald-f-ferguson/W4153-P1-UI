import { Component } from '@angular/core';
import { ICourseSection } from '../../models/course-section.model';
import { CourseSectionService } from '../../services/course-section.service';

@Component({
  selector: 'app-add-course-section',
  templateUrl: './add-course-section.component.html',
  styleUrls: ['./add-course-section.component.css'],
})
export class AddCourseSectionComponent {
  courseSection: ICourseSection = {
    course_id: '',
    course_name: '',
    uuid: '',
    created_at: '',
    course_code: '',
    sis_course_id: '',
    course_no: '',
    section: '',
    course_year: '',
    semester: ''
  };
  submitted = false;

  constructor(private courseSectionService: CourseSectionService) {}

  saveCourseSection(): void {
    const data = { ...this.courseSection };

    this.courseSectionService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newCourseSection(): void {
    this.submitted = false;
    this.courseSection = {
      course_id: '',
      course_name: '',
      uuid: '',
      created_at: '',
      course_code: '',
      sis_course_id: '',
      course_no: '',
      section: '',
      course_year: '',
      semester: ''
    };
  }
}

