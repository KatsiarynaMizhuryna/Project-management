import {Component, OnInit} from '@angular/core';
import { Board} from "../_models/Board";

import { User} from "../_models/User";
import { AccountService} from "../_services/account.service";
import {MainRouteService} from "../_services/main-route.service";
import { first} from "rxjs/operators";


@Component({ templateUrl: 'main-route.component.html' })
export class MainRouteComponent implements OnInit {
  user: User | null;
  boards?: any [];


  constructor(private accountService: AccountService,
              private mainRouteService: MainRouteService) {
    this.user = this.accountService.userValue;
  }
  ngOnInit() {
    this.mainRouteService.getAllBoards()
      .pipe(first())
      .subscribe(boards => this.boards = boards);
  }
  deleteBoard(id: string) {
    //const board = this.boards!.find(x => x._id === id);
    //board.isDeleting = true;
    this.mainRouteService.delete(id )
      .pipe(first())
      .subscribe(() => this.boards = this.boards!.filter(x => x._id !== id));
  }
}
