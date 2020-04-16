import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted = false;
  form = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  signin() {
    this.submitted = true;
    if (this.form.status == 'VALID') {

    }
  }

}
