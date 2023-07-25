import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService} from "../_services/account.service";

@Component({ templateUrl: 'profile.component.html' })
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  id?: string;
  loading = false;
  submitting = false;
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
      name: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    if (this.id) {
      // edit mode
      this.loading = true;
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue(x);
          this.loading = false;
        });
    }
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

    this.submitting = true;
    this.saveUser()
      .pipe(first())
      .subscribe({
        next: () => {
          //this.alertService.success('User saved', { keepAfterRouteChange: true });
          this.router.navigateByUrl('/');
        },
        error: error => {
          //this.alertService.error(error);
          this.submitting = false;
        }
      })
  }

  private saveUser() {
    // update user
    return this.accountService.update(this.id!, this.form.value);
  }

  deleteUser() {
    this.accountService.delete(this.id!)
      .pipe(first())
      .subscribe(() => this.id = undefined);
  }
}
