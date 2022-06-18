import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;


  constructor(private httpService:HttpService) { }
  registration(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'content-type': 'application/json'
      
      })
    }

return this.httpService.postService(this.base+`User/register`,data,false,
  header);
}
login(data:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json-patch+json'
    })
  }
return this.httpService.postService(this.base+`User/Login?Email=${data.Email}&Password=${data.Password}`, {} ,false,header)
}
ForgetPassword(data:any){
  let header={
    headers:new HttpHeaders({
      'content-type': 'application/json'
    })
  }
return this.httpService.postService(this.base+`User/ForgetPassword?email=${data.email}`, {} ,false,header)

}
ChangePassword(data:any,token:any){
  let header={
    headers:new HttpHeaders({
      'content-type': 'application/json',
      'Authorization':`Bearer ${token}`
    })
  }
return this.httpService.putService(this.base+`User/ChangePassword/${data.password}/${data.confirmpassword}`, {} ,true,header)
//return this.httpService.putService(this.base+'User/ChangePassword',data,true,header)

}
}
