import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  coffeGallary: string[];
  imgSrc:string="assets/images/15.png";
  coffeDes: string = "Some quick example text to build on the course content and make up the bulk of the card's content.";
  constructor() {
    this.coffeGallary = [
      "assets/images/15.png",
      "assets/images/12.jpg",
      "assets/images/13.jpg",
    ];
   }
  ngOnInit(): void {}
  i: number =0;
  showGallary(e: Event){
    e.preventDefault();
    if(this.i == this.coffeGallary.length){
      this.i = 0;
    }

    this.imgSrc = this.coffeGallary[++this.i];
  }

}
