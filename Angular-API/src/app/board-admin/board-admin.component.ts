import { Component, OnInit } from '@angular/core';
import { UserService} from '../_services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  students: any;
  currentStudent = null;
  currentIndex = -1;
  isShowStudent = false;

  teachers: any;
  currentTeacher = null;
  currentIndexTeacher = -1;
  isShowTeacher = false;

  classes: any;
  currentClass = null;
  currentIndexClass = -1;
  isShowClass = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  GetStudents() {
    this.isShowStudent = !this.isShowStudent;
    this.retrieveStudents();
  }

  GetTeachers() {
    this.isShowTeacher = !this.isShowTeacher;
    this.retrieveTeachers();
  }

  GetClasses() {
    this.isShowClass = !this.isShowClass;
    this.retrieveClasses();
  }

  retrieveStudents(): void {
    this.userService.getAllStudentsService()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveTeachers(): void {
    this.userService.getAllTeachersService()
      .subscribe(
        data => {
          this.teachers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveClasses(): void {
    this.userService.getAllClassesService()
      .subscribe(
        data => {
          this.classes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }

  setActiveStudent(student, index): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  refreshListTeachers(): void {
    this.retrieveTeachers();
    this.currentTeacher = null;
    this.currentIndexTeacher = -1;
  }

  setActiveTeacher(teacher, index): void {
    this.currentTeacher = teacher;
    this.currentIndexTeacher = index;
  }

  refreshListClasses(): void {
    this.retrieveClasses();
    this.currentClass = null;
    this.currentIndexClass = -1;
  }

  setActiveClass(classes, index): void {
    this.currentClass = classes;
    this.currentIndexClass = index;
  }
}