import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Task, Board, Column} from "../_models/Board";
import  { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  /*private initBoard = [
    {
      id: 1,
      title: 'To Do',
      color: '#e7f8f4',
      list: [
        {
          id: 1,
          text: 'Add your task here ...'
        },
      ]
    },
  ]

  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)
  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) {}

  getBoard$() {
    return this.board$.asObservable()
  }
  editColumnTitle(columnId: number | string, newTitle: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.title = newTitle;
      }
      return column;
    });

    this.board$.next([...this.board]);
  }
  editCardText(cardId: number, columnId: string, newText: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            card.text = newText;
          }
          return card;
        });
      }
      return column;
    });

    this.board$.next([...this.board]);
  }
  addColumn(id: number,title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title: title,
      color: '#e7f8f4',
      list: [],
    };

    this.http.post(`${this.apiUrl}/boards/${id}/columns`, title ).subscribe(() => {
      this.board = [...this.board, newColumn];
      this.board$.next([...this.board]);
    });
  }

  addCard(text: string, columnId: number) {
    const newCard: Card = {
      id: Date.now(),
      text
    };

    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [newCard, ...column.list];
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  deleteColumn(columnId: number | string) {
    this.board = this.board.filter((column: Column) => column.id !== columnId);
    this.board$.next([...this.board]);
  }

  deleteCard(cardId: number, columnId: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      return column;
    });

    this.board$.next([...this.board]);
  }*/
}
