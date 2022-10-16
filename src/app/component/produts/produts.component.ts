import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {
  categories:string[]=[];

  products: {id:number; pName:string ; imgsrc:string}[];
  imgsrc:string="assets/images/7.png";
  // test: string='Hello test';
  constructor() { 
   
   this.categories=['HTML','CSS','JS','ANGULAR','REACT','NODE JS','WEB TOOLING']
   this.products =[
   { id:1 , pName:'HTML',imgsrc:'assets/images/7.jpg'},
   { id:2 , pName:'CSS',imgsrc:"assets/images/6.jpg"},
   { id:3 , pName:'JS',imgsrc:"assets/images/5.jpg"},
   { id:4 , pName:'Angular',imgsrc:"assets/images/7.jpg"}];
  }
  

  ngOnInit(): void {
  }

}
