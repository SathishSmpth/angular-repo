import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.inteface';
import { UserService } from '../user.service';
import { UserAuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { UserAuthResponse } from 'src/app/interface/auth.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user!: User;
  error!: string;
  isLoading:boolean = false
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
    this.isLoading = true
    let authObs: Observable<UserAuthResponse>;
    authObs = this.auth.signUp(this.user);
    authObs.subscribe(
      (res) => {
        this.isLoading = false
        this.router.navigate(['/']);
      },
      (err) => {
        this.isLoading = false
        this.error = err;
      }
    );
  }
}
