import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  students: any;
  message = '';

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.getStudent(this.route.snapshot.paramMap.get('id'));
  }
  getStudent(id_student) {
    this.userService.getStudentService(id_student)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateStudent() {
    for(let student of this.students){
    this.userService.updateStudentService(this.route.snapshot.paramMap.get('id'), student)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The student was updated successfully!';
        },
        error => {
          console.log(error);
        });
      }
  }

}
