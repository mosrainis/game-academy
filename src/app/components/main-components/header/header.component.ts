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

  @ViewChild('categoryBtn', {static: false}) categoryBtn: ElementRef

  constructor(
    private api: ApiService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e:Event)=> {
      if(e.target !== this.categoryBtn.nativeElement){
        this.desktopCategory = false;
      }
    })
  }

  ngOnInit() {
    this.getCategory()
  }

  toggleCategory() {
    this.desktopCategory = !this.desktopCategory;
  }

  getCategory() {
    this.api.getCat().subscribe(result => {
      this.websiteCategory = result
      console.log(this.websiteCategory)
    }, error => {
      console.error(error);
    })
  }

}
