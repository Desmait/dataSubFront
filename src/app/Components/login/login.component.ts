import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {UserModel} from '../../Models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  user: UserModel = new UserModel('', '', '');

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    this.user.email = this.email;
    this.user.password = this.password;
    this.authService.authLogin(this.user).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['main']);
    });
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }
}
