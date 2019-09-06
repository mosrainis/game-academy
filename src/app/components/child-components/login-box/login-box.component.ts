import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
import { step1login, step2login } from 'src/app/models/user-login.model';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  loginForm: FormGroup
  verifyForm: FormGroup
  mobileRegex = "^09[0|1|2|3][0-9]{8}$"

  userDataS1: step1login = {
    mobile: "",
    device_id: "a778c951-dd14-48b5-bc21-52c1ae04bad1",
    device_model: "samsung GT-I9300",
    device_os: "",
    gcm: ""
  }
  
  userDataS2: step2login

  @Input() displayLoginModal: boolean
  mobileReceived: boolean = false
  clickedInside: boolean = false

  constructor(
    private api: ApiService,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(document.body, 'modal-open') //Disables window scroll when the login modal is open
  }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open')
  }

  initForm() {
    this.loginForm = new FormGroup({
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.mobileRegex)
      ])
    })
  }

  step1login(formValue) {    
    this.userDataS1.mobile = formValue.mobile
    this.userDataS1.device_id = "a778c951-dd14-48b5-bc21-52c1ae04bad1"
    this.userDataS1.device_os = window.navigator.platform
    this.mobileReceived = true
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
