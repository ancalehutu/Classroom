import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teachers = {
    id_teacher: '',
    firstname: '',
    lastname: ''
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveTeacher(): void {
    const data = {
      id_teacher: this.teachers.id_teacher,
      firstname: this.teachers.firstname,
      lastname: this.teachers.lastname
    };
    console.log(data);
    this.userService.createTeacherService(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTeacher(): void {
    this.submitted = false;
    this.teachers = {
      id_teacher: '',
      firstname: '',
      lastname: ''
    };
  }

}
