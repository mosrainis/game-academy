import { Component, OnInit, Input } from '@angular/core';
import { Homeitem } from 'src/app/models/content.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  @Input() contentList: Homeitem[]

  constructor() { }

  ngOnInit() {
  }

}
