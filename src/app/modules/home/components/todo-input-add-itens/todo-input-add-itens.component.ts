import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent {
  @Output() public emItem = new EventEmitter();
  public addItem: string = "";

  public submitItem(){
    this.addItem = this.addItem.trim();
    if (this.addItem) {
      this.emItem.emit(this.addItem);
      this.addItem = '';
    }
  }
}


