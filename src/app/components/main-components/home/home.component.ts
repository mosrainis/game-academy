import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Category, Homeitem } from 'src/app/models/content.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeCategory: Category[]
  homeItems: Homeitem[]

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.api.getHomeItems().subscribe(result=>{
      console.log(result);
      this.homeCategory = result["parent_categories"]
      this.homeItems = result["homeitem"]
    },
    error => {
      console.error(error);
    })
  }

  hasOnlyOneChild(item) {
    if (item.products[1]) {
      return false
    }
    return true
  }

}
