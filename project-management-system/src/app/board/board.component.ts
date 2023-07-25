import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService} from "../_services/account.service";

@Component({ templateUrl: 'board.component.html' })
export class BoardComponent implements OnInit {
  form!: FormGroup;
  id?: string;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
    // private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.accountService.userValue?.id;
    // form with validation rules
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.createBoard(this.form.get('title')?.value, this.id!)
      .pipe(first())
      .subscribe({
        next: () => {
          //this.alertService.success('Board created', { keepAfterRouteChange: true });
          this.router.navigateByUrl('/');
        },
        error: error => {
          //this.alertService.error(error);
          this.loading = false;
        }
      })
  }

  private createBoard(title: string, userId: string) {
    return this.accountService.createBoard(title, userId);
  }
}
