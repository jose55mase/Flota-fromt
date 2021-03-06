import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

import { User } from "./modeloUsuarios";
import { RestResponse } from '../modelo/restResponse.model';
 
@Injectable()
export class UserService {
  
  private apiUrl = 'http://localhost:8080/getUsers';
  
  constructor(private http: Http) {
  }
  //Lista Usuario
  findAll(): Observable<User[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Tenemos un error en server'));
  }
 
  findById(id: number): Observable<User> {
    return null;
    
  }
  
  //Crea Usuario
 

  // Eliminar Usuario
  public delete(user: User): void {
    this.http.post("http://localhost:8080/deleteUser", JSON.stringify(user)).subscribe();
  }
  
  updateUser(user: User): Observable<User> {
    return null;
  }
  public validate(user: User): boolean {
    let isValid = true;

    if (this.validate) {
      isValid = false;    
    }
    return isValid;
  }  
 
}
