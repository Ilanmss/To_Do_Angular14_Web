import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  task: string = 'create a new task'
  toDoList: any = ['task4', 'task5']
  doingList:any = ['task3']
  doneList:any = ['task1', 'task2']
  toDoLeft:number = this.toDoList.length
  doingLeft:number = this.doingList.length
  doneLeft:number = this.doneList.length

  add(){
    this.toDoList.push(this.task)
    this.toDoLeft++
  }
  doing(){
    
    this.doingList.push(this.toDoList[this.toDoList.length-1])
    this.toDoList.pop()
    this.doingLeft++
    this.toDoLeft--
  }
  done(){
    this.doneList.push(this.doingList[this.doingList.length-1])
    this.doingList.pop()
    this.doneLeft++
    this.doingLeft--
  }
  toDo(){
    this.toDoList.push(this.doingList[this.doingList.length-1])
    this.doingList.pop()
    this.toDoLeft++
    this.doingLeft--
  }
  doneToDoing(){
    this.doingList.push(this.doneList[this.doneList.length-1])
    this.doneList.pop()
    this.doingLeft++
    this.doneLeft--
  }

  info(event: MouseEvent){
    console.log(event.target)
  }
}
