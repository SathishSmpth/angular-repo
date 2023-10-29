import { Component } from '@angular/core';
import { UserAuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weekend Angular';
  constructor(private authService: UserAuthService) {}
  
  ngOnInit() {
    this.authService.autoLogin();
  }
}
