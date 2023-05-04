import { Component, DoCheck } from '@angular/core';
//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck{
  ngDoCheck(): void {
    this.taskList.sort((first,last)=>Number(first.check)- Number(last.check))
    localStorage.setItem("list",JSON.stringify(this.taskList));
  }
  public taskList: Array<TaskList> = [];

  public setEmit(event:string){
    this.taskList.push({task: event, check: false});
  }

  public deleteItem(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAll(){
    const confirm = window.confirm("Você deseja deletar tudo?")
    if(confirm){
      this.taskList = [];
    }
  }

  public valInput(ev: string, i: number){
    if (!ev.length) {
      const confirm = window.confirm("Task está vazia. Você deseja deletar?")
      if(confirm){
        this.deleteItem(i);
      }
    }
  }
}
