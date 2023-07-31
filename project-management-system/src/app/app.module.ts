import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainRouteComponent } from './main-route/main-route.component';
import { BoardComponent } from './board/board.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { EditTaskComponent} from "./board-page/edit-task/edit-task.component";
import {MatInputModule} from "@angular/material/input";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import { AddNewElementDialogComponent } from './board-page/add-new-element-dialog/add-new-element-dialog.component';
import { AddNewElementDialogBodyComponent } from './board-page/add-new-element-dialog-body/add-new-element-dialog-body.component';
import {BoardEditComponent} from "./board/board-edit.component";
import {EditTaskBodyComponent} from "./board-page/edit-task-body/edit-task-body.component";
import {NgOptimizedImage} from "@angular/common";
import {TranslationModule} from "./translation/translation.module";
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertComponent } from './core/alert/alert.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainRouteComponent,
    BoardComponent,
    WelcomePageComponent,
    ProfileComponent,
    EditTaskBodyComponent,
    BoardEditComponent,
    DialogComponent,
    EditTaskComponent,
    AddNewElementDialogComponent,
    AddNewElementDialogBodyComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    NgOptimizedImage,
    TranslationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
