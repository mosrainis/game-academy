import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { category } from 'src/app/models/content.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  desktopCategory: boolean = false
  websiteCategory: category
  displayLoginModal: boolean //Ref to the login-box Component

  @ViewChild('categoryBtn', {static: false}) categoryButton: ElementRef
  @ViewChild('loginBtn', {static: false}) loginButton: ElementRef
  @ViewChild('loginModal', {static: false}) loginModal: ElementRef

  constructor(
    private api: ApiService,
    private renderer: Renderer2,
  ) {
    this.modalEvents()
  }

  ngOnInit() {
    this.getCategory()
  }

  toggleCategory() {
    this.desktopCategory = !this.desktopCategory
  }

  getCategory() {
    this.api.getCat().subscribe(result => {
      this.websiteCategory = result
      console.log(this.websiteCategory)
    }, error => {
      console.error(error);
    })
  }

  modalEvents() {

    //Displays and hides Desktop Category
    this.renderer.listen('window', 'click', (e:Event)=> {
      if(e.target !== this.categoryButton.nativeElement){
        this.desktopCategory = false;
      }
    })

    //Displays and hides login window
    this.renderer.listen('window', 'click', (e:Event)=> {
      if(this.loginModal.nativeElement.contains(event.target) || this.loginButton.nativeElement.contains(event.target)){
        this.displayLoginModal = true
      } else {
        this.displayLoginModal = false
      }
    })
  }
}
