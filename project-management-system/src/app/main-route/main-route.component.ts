import { Component } from '@angular/core';

import { User} from "../_models/User";
import { AccountService} from "../_services/account.service";

@Component({ templateUrl: 'main-route.component.html' })
export class MainRouteComponent {
  user: User | null;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
