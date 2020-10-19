import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  currentValue: number = 0;
  time = 700;
  changeValue() {
    //nothing
  }

  ngOnInit() {
    setInterval(() => {
      this.currentValue = Math.floor(Math.random() * 100);
    }, this.time);
  

  }


  imageObject = [{
    image:  '../assets/snap-cart.png',
    thumbImage: '../assets/snap-cart.png',
    // title: 'snap-cart'
  }, {
    image: '../assets/snap-details.png',
    thumbImage: '../assets/snap-details.png'
  }, {
    image: '../assets/snap-home.png',
    thumbImage: '../assets/snap-home.png',
    // title: 'Example with title.'
  }, {
    image: '../assets/snap-login.png',
    thumbImage: '../assets/snap-login.png'
  }, {
    image: '../assets/snap-profile.png',
    thumbImage: '../assets/snap-profile.png'
  },
  ];


  imageObject2 = [{
    image: '../assets/Capture.PNG',
    thumbImage: '../assets/Capture.PNG',
    // title: 'snap-cart'
  }, {
    image: '../assets/Capture3.PNG',
    thumbImage: '../assets/Capture3.PNG',
  }, {
    image:  '../assets/Capture2.PNG',
    thumbImage: '../assets/Capture2.PNG',
    // title: 'Example with title.'
  }, {
    image: '../assets/Capture.PNG',
    thumbImage: '../assets/Capture.PNG',
    // title: 'Example with title.'
  }, {
    image: '../assets/Capture2.PNG',
    thumbImage: '../assets/Capture2.PNG',
    // title: 'Example with title.'
  }
  ];








  data = [
    {
      image: "../assets/Capture.PNG",
      textInfo: "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
      heart: 57,
      comments: 6,
      views: 38
    },
    {
      image: "../assets/1.jpeg",
      textInfo: "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
      heart: 57,
      comments: 6,
      views: 38
    },
    {
      image: "../assets/2.jpeg",
      textInfo: "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
      heart: 57,
      comments: 6,
      views: 38
    },

  ]
}
