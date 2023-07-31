import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../_services/account.service";

@Component({ templateUrl: 'welcome-page.component.html' })
export class WelcomePageComponent implements OnInit{
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    const user = this.accountService.userValue;
    if (user) {
      this.router.navigateByUrl('/');
    }
  }
}
