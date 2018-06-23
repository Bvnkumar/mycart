import { Component } from '@angular/core';
import { AppGlobals } from '../app.global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedBack {
  comments;
  feed;
  selectedId;
  selected_Item;
  temp_rating;
   limit=[{id:1,valid:false},{id:2,valid:false},{id:3,valid:false},{id:4,valid:false},{id:5,valid:false}];

  constructor(public appgolbal: AppGlobals, public router: ActivatedRoute) {
    this.selectedId = this.router.snapshot.params.id;
    this.selected_Item = this.appgolbal.productList.filter(data => data.id == this.selectedId)[0];
    if (this.appgolbal.comments.length) {
      this.comments = this.appgolbal.comments.filter(data => {
        console.log("data", data)
        if (data.id == this.selectedId) {
          return true;
        }
      })
    } else {
      this.comments = []
    }
  }

  FeedSubmit() {
    if (this.feed && this.feed != undefined) {
      this.appgolbal.comments.push({ comment: this.feed, id: this.selectedId, rating: this.temp_rating });
      this.comments = this.appgolbal.comments.filter(data=>{if(data.id==this.selectedId){
        return true;
      }});
      console.log("this comments", this.comments)
      this.feed = "";
    } else {
      alert("Enter a proper value")
    }
  }
  rateChange(event) {
    this.temp_rating = (event!=undefined&&event)?event:0;
    console.log("this temp rating", this.temp_rating)
    console.log("in the feeback")
    console.log("event", event)
  }
}