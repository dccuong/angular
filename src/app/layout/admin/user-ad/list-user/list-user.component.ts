import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/layout/types/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList: IUser[]
  constructor(private userService: AuthService) {
    this.userList = []
  }
  onGetList() {
    this.userService.getList().subscribe((data) => {
      this.userList = data
    })
  }
  ngOnInit(): void {
    this.onGetList()


  }
  ondelete(_id: string) {

    if (window.confirm("bạn có muốncoas")) {
      this.userService.delete(_id).subscribe((data) => {
        this.onGetList()

      })

    }
  }
}