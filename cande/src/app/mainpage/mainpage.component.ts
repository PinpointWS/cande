import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

    results;
    title1;
    name1;
    review1;
    title2;
    name2;
    review2;
        
  constructor(private http: HttpClient) { }

  ngOnInit() {
      
      this.http.get('http://104.197.162.156/review_json').subscribe(data => {
          // Read the result field from the JSON response.
          console.log("meb", data);
          this.results = data;
          this.title1 = data[0].title[0].value;
          this.name1 = data[0].field_name[0].value;
          this.review1 = data[0].field_review[0].value;

          this.title2 = data[1].title[0].value;
          this.name2 = data[1].field_name[0].value;
          this.review2 = data[1].field_review[0].value;

        });
  }

  
}
