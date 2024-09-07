import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourseSection } from '../../models/course-section.model';
import { CourseSectionService } from '../../services/course-section.service';

@Component({
  selector: 'app-course-section-details',
  templateUrl: './course-section-details.component.html',
  styleUrls: ['./course-section-details.component.css'],
})
export class CourseSectionDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentCourseSection: ICourseSection = {
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

  message = '';

  constructor(
    private courseSectionService: CourseSectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCourseSection(this.route.snapshot.params['id']);
    }
  }

  getCourseSection(id: string): void {
    this.courseSectionService.get(id).subscribe({
      next: (data) => {
        this.currentCourseSection = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = { ...this.currentCourseSection, published: status };

    this.message = '';

    this.courseSectionService.update(this.currentCourseSection.course_id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateCourseSection(): void {
    this.message = '';

    this.courseSectionService
      .update(this.currentCourseSection.course_id, this.currentCourseSection)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This course section was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCourseSection(): void {
    this.courseSectionService.delete(this.currentCourseSection.course_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/course-sections']);
      },
      error: (e) => console.error(e)
    });
  }
}
