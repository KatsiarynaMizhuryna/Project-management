import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BoardService} from "../../_services/board.service";
import { Card, Column} from "../../_models/Board";

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent implements OnInit {
  constructor(
    public boardService: BoardService
  ) { }
  ngOnInit(): void {
  }
  onAddCard(text: string, columnId: number) {
    if(text) {
      this.boardService.addCard(text, columnId)
    }
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId)
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId)
  }
  onEditCardText(cardId: number, columnId: number, newText: string) {
    this.boardService.editCardText(cardId, columnId, newText)
  }


  drop(event: CdkDragDrop<Card[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
