import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsListPgComponent } from './view/students-list-pg/students-list-pg.component';
import { AddStudentModComponent } from './view/add-student-mod/add-student-mod.component';
import { UpdateStudentModComponent } from './view/update-student-mod/update-student-mod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from './ng-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListPgComponent,
    AddStudentModComponent,
    UpdateStudentModComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
