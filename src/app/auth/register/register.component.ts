import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CreateUserRequest } from '../../models/create-user-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    const request = new CreateUserRequest(
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.rePassword,
      this.registerForm.value.fullName
    );

    this.loading = true;

    this.authService.register(request).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Compte créé avec succès 🎉';
        this.registerForm.reset();
        setTimeout(() => {
          this.router.navigate(['/login']); // ✅ redirection vers HomeComponent
        }, 100);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Échec de l’inscription.';
      }
    });
  }
}



