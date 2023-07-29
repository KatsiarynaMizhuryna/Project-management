import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from "./account-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import {TranslationModule} from "../translation/translation.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        TranslationModule
    ],
  declarations: [
    LayoutComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AccountModule { }
