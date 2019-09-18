import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  // isAuth = false;

  posts = [
    {
      title: 'Mon Premier Post1',
      // tslint:disable-next-line: max-line-length
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: 'Mon Deuxième Post2',
      // tslint:disable-next-line: max-line-length
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      loveIts: 1,
      created_at: new Date()
    },

    {
      title: 'Mon Troisième Post3',
      // tslint:disable-next-line: max-line-length
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      loveIts: 2,
      created_at: new Date()
    }

    ];

    constructor() {

    }

    ngOnInit() {
      console.log('hazma');
      console.log('hhhhh', this.posts);
    }

}
