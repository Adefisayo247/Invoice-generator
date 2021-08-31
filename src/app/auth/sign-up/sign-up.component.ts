import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup

  constructor( ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', 
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/)
      ]),
      confirmPassword:new FormControl('', 
      [   Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/)
    ]),
      acceptTerms:new FormControl(false, Validators.requiredTrue),
    }
  );
  }
}
