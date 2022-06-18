import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      // this.registerForm = this.formBuilder.group({
      //  email: ['', [Validators.required, Validators.email]],
      //  password: ['', [Validators.required, Validators.minLength(6)]]
       Email:['',Validators.required],
       Password:['',Validators.required] 
   });
     
   }
 
   onSubmit() {
    this.submitted=true;
     console.log("inside submit")
     if(this.LoginForm.valid){
       console.log("valid data",this.LoginForm.value);
       let data={
 
        Email: this.LoginForm.value.Email,
      
        Password: this.LoginForm.value.Password,     
    }
    //console.log("helllooo")
    this.user.login(data).subscribe((res:any)=>{
    console.log(res);
    localStorage.setItem('token',res.token)
  })
     }else{
       console.log("Invalid data",this.LoginForm.value);
     }
  }

}
