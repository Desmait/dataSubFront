import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  email: string;
  login: string;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.authService.getMe().subscribe((res) => {
        this.email = res.email;
        this.login = res.name;
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  logoutUser() {
    this.authService.logoutUser().subscribe((res) => {
      console.log(res);
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    });
  }
}
