import { Component, OnInit, Input } from '@angular/core';
import { Homeitem } from 'src/app/models/content.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() content: Homeitem[]

  constructor() { }

  ngOnInit() {
  }

}
