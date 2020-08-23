import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  classes = {
    id_classes: '',
    name: ''
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveClass(): void {
    const data = {
      id_classes: this.classes.id_classes,
      name: this.classes.name
    };
    console.log(data);
    this.userService.createClassService(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newClass(): void {
    this.submitted = false;
    this.classes = {
      id_classes: '',
      name: ''
    };
  }


}
