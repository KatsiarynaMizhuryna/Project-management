import { Component } from '@angular/core';
import { LanguageService} from "./_services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-management-system';
  constructor(private languageService: LanguageService) {

  }
  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}
