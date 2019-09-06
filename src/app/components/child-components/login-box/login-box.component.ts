import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
import { step1login, step2login } from 'src/app/models/user-login.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class LoginBoxComponent implements OnInit {

  loginForm: FormGroup
  verifyForm: FormGroup
  mobileRegex = "^09[0|1|2|3][0-9]{8}$"
  verifycodeRegex = "^[0-9]{5}$"

  userDataS1: step1login = {
    mobile: "",
    device_id: "a778c951-dd14-48b5-bc21-52c1ae04bad1",
    device_model: "samsung GT-I9300",
    device_os: "",
    gcm: ""
  }
  
  userDataS2: step2login = {
    mobile: "",
    device_id: "a778c951-dd14-48b5-bc21-52c1ae04bad1",
    verification_code: "samsung GT-I9300",
    nickname: ""
  }
  

  @Input() displayLoginModal: boolean
  mobileReceived: boolean = false
  clickedInside: boolean = false

  constructor(
    private api: ApiService,
    private renderer: Renderer2,
    private storage: LocalStorageService
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

    this.verifyForm = new FormGroup({
      verifycode: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.verifycodeRegex)
      ]),
      nickname: new FormControl(null)
    })
  }

  step1Login() {    
    this.userDataS1.mobile = this.loginForm.get("mobile").value
    this.userDataS1.device_id = "a778c951-dd14-48b5-bc21-52c1ae04bad1"
    this.userDataS1.device_os = window.navigator.platform
    console.log(this.userDataS1);
    
    this.api.mobileLoginS1(this.userDataS1).subscribe( result => {
      this.mobileReceived = true
    },error => {
      console.log(error);
    })
  } 

  step2Login() {
    this.userDataS2.mobile = this.userDataS1.mobile
    this.userDataS2.verification_code = this.verifyForm.get("verifycode").value
    this.userDataS2.nickname = this.verifyForm.get("nickname").value
    console.log(this.userDataS2);

    this.api.mobileLoginS2(this.userDataS2).subscribe( result => {
      this.storage.setToken(result["token"])
      this.displayLoginModal = false
    },error => {
      console.log(error);
    })
  }

}
