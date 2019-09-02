import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { step1login, step2login } from 'src/app/models/user-login.model';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  userData1: step1login = {
    mobile: "09305466378",
    device_id: "a778c951-dd14-48b5-bc21-52c1ae04bad1",
    device_model: "samsung GT-I9300",
    device_os: "Android 18",
    gcm: "091f8956-686a-4b20-a359-61180f51423c"
  }

  userData2: step2login = {
    mobile: "09305466378",
    device_id: "a778c951-dd14-48b5-bc21-52c1ae04bad1",
    verification_code: "45684",
    nickname: "mostafa"
  }

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  step1() {
    this.api.mobileLoginS1(this.userData1).subscribe( result => {
      console.log(result)
    })
  }

  step2() {
    this.api.mobileLoginS2(this.userData2).subscribe( result => {
      console.log(result)
    })
  }

}
