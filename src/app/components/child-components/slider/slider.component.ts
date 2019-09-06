import { Component, OnInit, Input } from '@angular/core';
import { Homeitem } from 'src/app/models/content.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  @Input() contentList: Homeitem[]

  customOptions: OwlOptions = {
    loop: false,
    margin: 15,
    stagePadding: 2,
    rtl: true,
    rewind: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {    
  }

}
