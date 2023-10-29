import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Output('handleSubmit') handleSubmit = new EventEmitter();
  userData!: FormGroup;
  @Input() error!: string;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,99}/
        ),
      ]),
    });
  }

  onSubmit() {
    if (this.userData.valid) {
      this.userService.userGivenValue.emit(this.userData.value);
      this.handleSubmit.emit();
    } else {
      this.userData.markAllAsTouched();
    }
  }
}
