import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService} from "../_services/account.service";
import { AlertService} from "../_services/alert.service";

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
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.accountService.userValue?.id;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    if (this.id) {
      this.loading = true;
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue(x);
          this.loading = false;
        });
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.submitting = true;
    this.saveUser()
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User saved',
            { keepAfterRouteChange: true, autoClose: true });
          this.router.navigateByUrl('/');
        },
        error: error => {
          this.alertService.error(error);
          this.submitting = false;
        }
      })
  }

  private saveUser() {
    return this.accountService.update(this.id!, this.form.value);
  }

  deleteUser() {
    this.accountService.delete(this.id!)
      .pipe(first())
      .subscribe(() => this.id = undefined);
  }
}
