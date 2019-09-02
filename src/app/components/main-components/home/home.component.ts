import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.api.getHomeItems().subscribe(result=>{
      console.log(result);
    },
    error => {
      console.error(error);
    })
  }

}
