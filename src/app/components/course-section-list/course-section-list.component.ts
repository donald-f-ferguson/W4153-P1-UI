import { Component, OnInit } from '@angular/core';
import { ICourseSection } from '../../models/course-section.model';
import { CourseSectionService } from '../../services/course-section.service';

@Component({
  selector: 'app-course-section-list',
  templateUrl: './course-section-list.component.html',
  styleUrls: ['./course-section-list.component.css'],
})
export class CourseSectionListComponent implements OnInit {
  courseSections?: ICourseSection[];
  currentCourseSection: ICourseSection = {
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
  current_course_id: string = '';
  currentIndex = -1;
  courseName = '';

  constructor(private courseSectionService: CourseSectionService) {}

  ngOnInit(): void {
    this.retrieveCourseSections();
  }

  retrieveCourseSections(): void {
    this.courseSectionService.getAll().subscribe({
      next: (data) => {
        this.courseSections = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveCourseSections();
    this.currentCourseSection = {
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
    this.currentIndex = -1;
  }

  setActiveCourseSection(courseSection: ICourseSection, index: number): void {
    this.currentCourseSection = courseSection;
    this.currentIndex = index;
  }

  removeAllCourseSections(): void {
    this.courseSectionService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchCourseName(): void {
    this.currentCourseSection = {
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
    this.currentIndex = -1;

    this.courseSectionService.findByCourseID(this.current_course_id).subscribe({
      next: (data) => {
        this.courseSections = new Array<ICourseSection>()
        // @ts-ignore
        this.courseSections.push(data);
        console.log(this.courseSections);
      },
      error: (e) => console.error(e)
    });
  }
}
