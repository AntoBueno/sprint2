import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }

  dologin(email:string, password:string){

    this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('estas logeado   :'  + res)
    }).catch(err => console.error('error   : ' + err)
    )
  }
   
}
