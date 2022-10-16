import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  inputValue:string = '';
  todoList: string[]=[];
  constructor() { }

  ngOnInit(): void {}
  addToList(){
    this.todoList.push(this.inputValue);
    this.inputValue='';
  }
  
remove(index: number){
  this.todoList = this.todoList.filter((todo,i)=> i !=index)

}
}
