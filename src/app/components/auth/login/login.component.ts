import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../../Services/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user = {
    email: '',
    password: ''
  };
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loaderService: LoaderService
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email,
      [Validators.required, Validators.maxLength(50)]
      ],
      'password': [this.user.password,
      [Validators.required, Validators.minLength(5)]
      ]
    });
  }
  submitLogin(): void {
    const postLoginData = {
      password: this.loginForm.value.password,
      username: this.loginForm.value.email,
      userType: 'SYSTEM'
    };
    // this.loaderService.display(true);
    // this.userService.loginUser(postLoginData).subscribe(
    //   data => {
    //     this.router.navigate(['dashboard']);
    //     this.loaderService.display(false);
    //   },
    //   error => {
    //     this.alertService.error(error.code, false);
    //     this.loaderService.display(false);
    //   });
  }


}
