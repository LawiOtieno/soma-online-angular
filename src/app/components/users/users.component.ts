import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


    data:any

  constructor(private mydata:UserService) {

  }

  getUser(){
    this.mydata.getUser().subscribe((data)=>{
      console.log(data)
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
