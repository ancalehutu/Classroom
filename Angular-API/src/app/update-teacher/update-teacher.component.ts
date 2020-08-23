import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  teachers: any;
  message = '';

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.getTeacher(this.route.snapshot.paramMap.get('id'));
  }

  getTeacher(id_teacher) {
    this.userService.getTeacherService(id_teacher)
      .subscribe(
        data => {
          this.teachers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTeacher() {
    for(let teacher of this.teachers){
    this.userService.updateTeacherService(this.route.snapshot.paramMap.get('id'), teacher)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The teacher was updated successfully!';
        },
        error => {
          console.log(error);
        });
      }
  }
}
