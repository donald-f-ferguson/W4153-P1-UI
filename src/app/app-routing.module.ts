import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionListComponent } from './components/course-section-list/course-section-list.component';
import { CourseSectionDetailsComponent } from './components/course-section-details/course-section-details.component';
import { AddCourseSectionComponent } from './components/add-course-section/add-course-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'course-section', pathMatch: 'full' },
  { path: 'course-section', component: CourseSectionListComponent },
  { path: 'course-sections/:id', component: CourseSectionDetailsComponent },
  { path: 'add', component: AddCourseSectionComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
