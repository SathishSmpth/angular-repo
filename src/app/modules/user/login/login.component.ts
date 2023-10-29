import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user.inteface';
import { UserService } from '../user.service';
import { UserAuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserAuthResponse } from 'src/app/interface/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user!: User;
  error!: string;
  isLoading: boolean = false;
  authObs!: Observable<UserAuthResponse>;

  constructor(
    private userService: UserService,
    private auth: UserAuthService,
    private router: Router
  ) {
    this.userService.userGivenValue.subscribe((data) => {
      this.user = data;
    });
  }
  handleSubmit() {
    this.isLoading = true;
    let authObs: Observable<UserAuthResponse>;
    authObs = this.auth.login(this.user);
    authObs.subscribe(
      (res) => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      (err) => {
        this.isLoading = false;
        this.error = err;
      }
    );
  }
}
