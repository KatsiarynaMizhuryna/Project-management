import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoardServiceV2 } from "../_services/board.service-v2";
import { ModalService } from "../_services/modal.service";
import { first, map } from "rxjs/operators";
import { User } from "../_models/User";
import { AccountService } from "../_services/account.service";
import { Column, Task } from "../_models/Board";

@Component({ templateUrl: 'board-edit.component.html' })
export class BoardEditComponent implements OnInit {
  user?: User | null;
  boardId?: string;
  columns?: Column[];
  tasks?: Task[];

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardServiceV2,
    private modalService: ModalService,
    private accountService: AccountService
  ) {
    this.user = this.accountService.userValue;
  }

  ngOnInit() {
    this.boardId = this.route.snapshot.params['id'];

    this.boardService.getColumns(this.boardId!)
      .pipe(first())
      .subscribe(columns => {
        this.columns = columns.map(column=> {
          return { ...column, ...{tasks: []} };
        })
      });

    this.boardService.getBoardTasks(this.boardId!)
      .pipe(map(tasks => {
        this.columns = this.columns!.map(column => {
          const x = tasks.filter(x => x.columnId == column._id);
          column.tasks.push(...x);
          return column;
        })
        return tasks;
      }))
      .pipe(first())
      .subscribe();
  }

  addColumn(title: string) {
    return this.boardService.createColumn(this.boardId!, title, 0)
      .pipe(first())
      .subscribe(column => this.columns!.push({ ...column, ...{tasks: []} }));
  }

  deleteColumn(BoardId: string | undefined, ColumnId: string) {
    this.modalService.openConfirmDialog("Delete this column ?").afterClosed()
      .subscribe(res => {
        if (res) {
          this.boardService.deleteColumn(BoardId, ColumnId)
            .pipe(first())
            .subscribe(() => this.columns = this.columns!.filter(x => x._id !== ColumnId));
        }
      })
  }

  addTask(title: string,  ColumnId: string) {
    return this.boardService.createTask(this.boardId!, ColumnId, this.user!.id!, title, 'add new task',0)
      .pipe(first())
      .subscribe(task => {
        let index = this.columns!.map(column => column._id).indexOf(ColumnId);
        this.columns![index].tasks.push(task);
      });
  }

  deleteTask(BoardId: string | undefined, ColumnId: string, TaskId: string) {
    this.modalService.openConfirmDialog("Delete this task ?").afterClosed()
      .subscribe(res => {
        if (res) {
          this.boardService.deleteTask(BoardId, ColumnId, TaskId)
            .pipe(first())
            .subscribe(() => {
              const columnIndex = this.columns!.findIndex(column => column._id === ColumnId);
              if (columnIndex !== -1) {
                this.columns![columnIndex].tasks = this.columns![columnIndex].tasks.filter(task => task._id !== TaskId);
              }
            });
        }
      })
  }

}
