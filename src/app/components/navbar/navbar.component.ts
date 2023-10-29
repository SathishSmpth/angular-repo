import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAuth = false;
  private userSub!: Subscription;
  constructor(private authService: UserAuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }
  logout() {
    this.authService.logut();
  }
}
