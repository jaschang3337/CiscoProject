import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './services/my-service.service';
import { UserData } from './model/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [MyServiceService]
})
export class AppComponent implements OnInit {
  title = 'app';

  user_data: UserData;

  constructor(private myService: MyServiceService) { }

  getData(): void {
    this.myService.getUserData().then (
      (data) => {
        this.user_data = data;
//       console.log(this.user_data);
      },
      (err) => {
        console.log(err);
      }
    )}; // the TS allows this nice little syntax to acheive this


  ngOnInit() {
    this.getData();

  }
}
