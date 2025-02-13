import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForms: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForms = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit(): void {
    sessionStorage.clear();
    if (this.loginForms.valid) {
      this.userService.login(this.loginForms.value).subscribe({
        next: (response: any) => {
          const regex = /"([^"]+)"/g;
          const matches = [];
          let match;
          while ((match = regex.exec(JSON.stringify(response))) !== null) {
            matches.push(match[1]);
          }
          sessionStorage.setItem('token', matches[1]);
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          console.log(err.message);
          alert("Credenciais inválidas. Por favor, tente novamente");
        },
      });
    }
  }
}
