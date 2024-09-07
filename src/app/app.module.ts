import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseSectionComponent } from './components/add-course-section/add-course-section.component';
import { CourseSectionDetailsComponent } from './components/course-section-details/course-section-details.component';
import { CourseSectionListComponent } from './components/course-section-list/course-section-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseSectionComponent,
    CourseSectionDetailsComponent,
    CourseSectionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
