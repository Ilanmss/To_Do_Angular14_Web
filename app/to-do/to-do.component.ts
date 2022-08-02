import {Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnChanges {
  
  @Input() toDoList = ['task1', 'task2']

  doing(){

  }

  constructor() {}
  ngOnChanges(): void {}
  ngOnInit(): void {}

}
