import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  loginForm = new FormGroup({
    enteredPAT: new FormControl('', Validators.required)
  });
  token: any;
  errorMsg: string = '';
  isError: Boolean = false;
  logIn: Boolean = false;
  fromLogin: Boolean = false;
  headData = '';

  // sending data to header
  ngOnInit() {
    this.fromLogin = false;
    this.headData = 'LeanIX Assignement -  GitHub Public Repositories';
  }
  // Form submit
  onLogin() {
    this.token = this.loginForm.get('enteredPAT')?.value

    if(this.token){
      this.authService.authPAT(this.token).subscribe((result: any) => {
        this.authService.beSubject.next(result);
        this.router.navigateByUrl('/reposList');
        this.logIn = true;
      }, (error) => {
        if(this.token){
          this.isError = true; 
        this.errorMsg = 'PAT you entered is incorrect'
        }
        
      })
    }

  }
  onKey() {
    this.isError = false;
  }

}
