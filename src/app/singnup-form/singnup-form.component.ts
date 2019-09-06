import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CustomValidators } from './custom-validators'
import { Router } from '@angular/router';

@Component({
  selector: 'singnup-form',
  templateUrl: './singnup-form.component.html',
  styleUrls: ['./singnup-form.component.css']
})
export class SingnupFormComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  // Reactive Forms

  forms = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      CustomValidators.cannotContainSpace,
      CustomValidators.shouldBeUnique
    ]),
    password: new FormControl('', Validators.required)
    
  })

  get username() {
    return this.forms.get('username')
  }

  get password() {
    return this.forms.get('password')
  }

  submit() {
    this.router.navigate(['/posts'],{
      queryParams: {page:'1', order:'newest'}
    })
  }
}
