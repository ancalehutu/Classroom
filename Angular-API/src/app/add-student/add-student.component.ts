import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students = {
    id_student: '',
    firstname: '',
    lastname: ''
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  saveStudent(): void {
    const data = {
      id_student: this.students.id_student,
      firstname: this.students.firstname,
      lastname: this.students.lastname
    };
    console.log(data);
    this.userService.createStudentService(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newStudent(): void {
    this.submitted = false;
    this.students = {
      id_student: '',
      firstname: '',
      lastname: ''
    };
  }

}
