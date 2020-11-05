import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {UserModel} from '../../Models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  newUser: UserModel = new UserModel('', '', '');
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerNewUser() {
    this.newUser.email = this.email;
    this.newUser.name = this.name;
    this.newUser.password = this.password;
    this.authService.authRegister(this.newUser).subscribe((res) => {
      console.log(res);
      this.router.navigate(['login']);
    });
  }
}
