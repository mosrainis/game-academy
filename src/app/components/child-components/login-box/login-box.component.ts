import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { step1login, step2login } from 'src/app/models/user-login.model';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  userDataS1: step1login = {
    mobile: "",
    device_id: "",
    device_model: "",
    device_os: "",
    gcm: ""
  }
  userDataS2: step2login
  @Input() displayLoginModal: boolean
  mobileRecieved: boolean = false

  constructor(
    private api: ApiService,
    private renderer: Renderer2,
    
  ) {
    this.renderer.addClass(document.body, 'modal-open')
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open')
  }

  step1login(formValue) {    
    this.userDataS1.mobile = formValue.mobile
    this.userDataS1.device_id = "a778c951-dd14-48b5-bc21-52c1ae04bad1"
    // this.userDataS1.device_model = 
    // console.log(window.navigator.appVersion);
    
    this.userDataS1.device_os = window.navigator.platform
    this.mobileRecieved = true
    
    
  } 

  step1() {
    this.api.mobileLoginS1(this.userDataS1).subscribe( result => {
      console.log(result)
    })
  }

  step2() {
    this.api.mobileLoginS2(this.userDataS2).subscribe( result => {
      console.log(result)
    })
  }

}
