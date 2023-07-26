import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoardServiceV2} from "../_services/board.service-v2";
import { ModalService} from "../_services/modal.service";
import { first } from "rxjs/operators";

import { Column } from "../_models/Board";

@Component({ templateUrl: 'board-edit.component.html' })
export class BoardEditComponent implements OnInit {
  id?: string;
  columns?: any[];
  constructor(
    private route: ActivatedRoute,
    private boardService: BoardServiceV2,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.boardService.getColumns(this.id!)
      .pipe(first())
      .subscribe(columns => this.columns = columns);
  }

  addColumn() {
    return this.boardService.createColumn(this.id!, 'some title', 0)
      .pipe(first())
      .subscribe();
  }

  deleteColumn(BoardId: string | undefined, ColumnId: string) {
    this.modalService.openConfirmDialog("Delete this column ?").afterClosed()
      .subscribe(res => {
        if (res) {
          this.boardService.deleteColumn(BoardId,ColumnId)
            .pipe(first())
            .subscribe(() => this.columns = this.columns!.filter(x => x._id !== ColumnId));
        }
      })
  }
}
