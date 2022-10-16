import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  
  listData:any[]=[];
  userData:string='';
  name:string ='';
  age:string='';
  

  constructor() {
    this.listData =[];
   }
    addItem() : void{
      const userData = {
        name:this.name,
        age:this.age
      }
    this.listData.push(this.userData);
    this.userData='';
   
   }
   reset():void{
    
   }
   removeItem(element: any){
   this.listData.forEach((value, index)=> {
    if(value == element)
    this.listData.splice(index,1)
   })
   }

  ngOnInit(): void {
  }

}


