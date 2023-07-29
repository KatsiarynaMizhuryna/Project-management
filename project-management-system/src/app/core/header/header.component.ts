import { Component } from '@angular/core';
import { AccountService} from "../../_services/account.service";
import { User} from "../../_models/User";
import { LanguageService} from "../../_services/language.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user?: User | null;
  selectedLanguage: string;

  constructor(
    private accountService: AccountService,
    private languageService: LanguageService) {
    this.accountService.user.subscribe(x => this.user = x);
    this.selectedLanguage = 'en';
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }

  logout() {
    this.accountService.logout();
  }
}
