import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BoardService} from "../../_services/board.service";

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input() item: any = null;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  @Output() emitCardItem: EventEmitter<{ card: any; increase: boolean }> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  @Output() editTaskEvent: EventEmitter<any> = new EventEmitter();
  //@Output() deleteTaskEvent: EventEmitter<any> = new EventEmitter();
  editing = false;
  editedText: string = '';
  open = false;
  constructor(private boardService: BoardService) { }
  ngOnInit(): void {}

  onCardDelete(id: number) {
    this.emitDeleteCard.emit(id)
  }

  editTask() {
    this.editing = true;
    this.editedText = this.item.text;
  }

  saveTask() {
    this.item.text = this.editedText;
    this.editing = false;
    this.editTaskEvent.emit(this.item);
  }

  cancelEdit() {
    this.editing = false;
  }

}
