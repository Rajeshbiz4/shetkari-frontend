import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLoginClick() {
    console.log('onLoginClick')
    this.router.navigateByUrl('/home');
  }

  onRegisterClick(){
    this.router.navigateByUrl('/register');
  }

  onFogotPasswaordClick(){
    this.router.navigateByUrl('/forgot');
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
