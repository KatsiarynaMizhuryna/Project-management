import {Component, OnInit} from '@angular/core';

import { User} from "../_models/User";
import { AccountService} from "../_services/account.service";
import { first} from "rxjs/operators";
import { ModalService} from "../_services/modal.service";
import {BoardServiceV2} from "../_services/board.service-v2";

@Component({ templateUrl: 'main-route.component.html' })
export class MainRouteComponent implements OnInit {
  user: User | null;
  boards?: any[];

  constructor(
    private accountService: AccountService,
    private boardService: BoardServiceV2,
    private modalService: ModalService)
  {
    this.user = this.accountService.userValue;
  }

  ngOnInit() {
    this.boardService.getAll()
      .pipe(first())
      .subscribe(boards => this.boards = boards);
  }

  deleteBoard(id: string) {
    //const board = this.boards!.find(x => x._id === id);
    //board.isDeleting = true;
    this.modalService.openConfirmDialog("Delete this board ?").afterClosed()
      .subscribe(res => {
        if (res) {
          this.boardService.delete(id)
            .pipe(first())
            .subscribe(() => this.boards = this.boards!.filter(x => x._id !== id));
        }
      })
  }
}

