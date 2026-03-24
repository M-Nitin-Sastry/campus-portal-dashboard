import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
  this.authService.login(this.email, this.password).subscribe(
    (res: any) => {
      localStorage.setItem('token', res.token);
      alert('Login Successful');
      this.router.navigate(['/dashboard']);
    },
    (err) => {
      alert('Invalid Email or Password');
    }
  );
}

}
