import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {

  classes: any;
  message = '';

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.getClass(this.route.snapshot.paramMap.get('id'));
  }

  getClass(id_classes) {
    this.userService.getClassService(id_classes)
      .subscribe(
        data => {
          this.classes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateClass() {
    for(let class_v of this.classes){
    this.userService.updateClassService(this.route.snapshot.paramMap.get('id'), class_v)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The class was updated successfully!';
        },
        error => {
          console.log(error);
        });
      }
  }
}
