import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserDTO } from '../../models/user.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUser: UserDTO;

  username: FormControl;
  platform: FormControl;
  email: FormControl;
  password: FormControl;

  registerForm: FormGroup;
  isValidForm: boolean | null;

  platformOptions: string[] = [
    'Ps4',
    'Ps5',
    'Xbox One',
    'Xbox Series',
    'Stadia',
    'PC',
  ];

  constructor(private formBuilder: FormBuilder) {
    this.registerUser = new UserDTO('', '', '', '');

    this.isValidForm = null;

    this.username = new FormControl(this.registerUser.username, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.platform = new FormControl('', [Validators.required]);

    this.email = new FormControl(this.registerUser.email, [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.password = new FormControl(this.registerUser.password, [
      Validators.required,
      Validators.minLength(8),
    ]);

    this.registerForm = this.formBuilder.group({
      username: this.username,
      platform: this.platform,
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  register(): void {
    /*
    this.isValidForm = false;

    if (this.registerForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.registerUser = this.registerForm.value;

    const user: UserDTO = {
      username: this.registerUser.username,
      platform: this.registerUser.platform,
      email: this.registerUser.email,
      password: this.registerUser.password,
    };

    this.store.dispatch(UserAction.register({ user }));
    */

    const username = this.registerForm.value.username;
    const platform = this.registerForm.value.platform;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    console.log(
      `Username: ${username} Platform: ${platform} Email: ${email}, Password: ${password}`
    );
  }
}
