import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForms: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForms = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit(): void {
    console.log(this.registerForms.value);
    if(this.registerForms.valid) {
      this.userService.register(this.registerForms.value).subscribe({
        next: () => {
          alert("Usuário registrado com sucesso!");
          this.router.navigateByUrl('/login');
        },
        error: (err) => console.log(err.message),
      });
    }
  }

}
