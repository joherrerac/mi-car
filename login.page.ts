import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    correo: null,
    password: null
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  async login() {
    console.log('credentials -> ', this.credentials)
    const res = await this.auth.login(this.credentials.correo, this.credentials.password)
    if (res) {
      console.log('res -> ', res)
    }
  }

}
