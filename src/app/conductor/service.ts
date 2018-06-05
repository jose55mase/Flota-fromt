import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { RestResponse } from '../modelo/restResponse.model';
import { Conductor } from '../modelo/conductor.module';
 
@Injectable()
export class ConductorService {
  
  private apiUrl = 'http://localhost:8080/getConductores';
  
  constructor(private http: Http) {
  }
  //Lista Usuario
  findAll(): Observable<Conductor[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Tenemos un error en server'));
  }
 
  findById(id: number): Observable<Conductor> {
    return null;    
  }
  //Eliminar
  public delete(user: Conductor): void {
    this.http.post("http://localhost:8080/deleteUser", JSON.stringify(user)).subscribe();
  }
  //Actuelizar
  updateUser(user: Conductor): Observable<Conductor> {
    return null;
  }
  public validate(user: Conductor): boolean {
    let isValid = true;

    if (this.validate) {
      isValid = false;    
    }
    return isValid;
  }  
 
}
