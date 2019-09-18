import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

//  class Post {
//   constructor(
//     public  title: string,
//     public content: string,
//     public  loveits: number ,
//     public description? : string,
//     public  created_at?: Date,

//   ) {}
// }
export class PostListItemComponent implements OnInit {

  @Input() postData: any[];
 public loveIts  = 0 ;


  constructor() { }

  ngOnInit() {
    console.log("valid" , this.postData);
  }
  onLoveIts() {
    // console.log("Love it!");
    this.loveIts++;

  }

  onDontLoveIts() {
    // console.log("Don't love it!");
    this.loveIts--;
  }
  getColor() {
    let styleRed = {
      'background-color': 'red',
    };
    let styleGreen = {
      'background-color': 'green',
    };
    let styleWhite = {
      'background-color': 'white',
    };

  if (this.loveIts < 0){
    return styleRed;
  }
  if(this.loveIts > 0){
    return styleGreen;
  }
  if(this.loveIts === 0){
    return styleWhite;
  }

    }
}


