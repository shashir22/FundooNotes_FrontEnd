import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
  ForgetPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.formBuilder.group({
      email:['',Validators.required]
    });
  }
  onSubmit() {
    console.log("inside submit")
if(this.ForgetPasswordForm.valid){
  console.log("valid data",this.ForgetPasswordForm.value);
}else{
  console.log("Invalid data",this.ForgetPasswordForm.value);
}
  }
}