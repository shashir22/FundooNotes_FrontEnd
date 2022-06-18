import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ResetPasswordForm = this.formBuilder.group({
    
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    });
  }
    onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.ResetPasswordForm.valid) {
      console.log("valid data", this.ResetPasswordForm.value);
    }
      else {
        console.log("Invalid data", this.ResetPasswordForm.value);
      }
  }

}
