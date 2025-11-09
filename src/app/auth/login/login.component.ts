import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule , RouterModule],
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router 
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.http.post('http://localhost:9224/api/v1/auth/login', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          this.loading = false;
          this.successMessage = 'Connexion réussie ! ✅';

          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);

          setTimeout(() => {
            this.router.navigate(['/home']); // ✅ redirection vers HomeComponent
          }, 100);
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'Email ou mot de passe incorrect.';
        }
      });
  }
}
