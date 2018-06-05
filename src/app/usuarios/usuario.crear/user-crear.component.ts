import { Component, OnInit, Inject } from '@angular/core';
import { User } from "./../modeloUsuarios";
import { UserService } from "./user-crear.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-user-crear',
  templateUrl: './user-crear.component.html',  
  styleUrls: ['./user-crear.component.css'],
  providers: [UserService]
})
export class UserCrearComponent implements OnInit {
  private user : User 
  validar : boolean = false;
  users : User[];
  //validaciones
  nombreValidar : string = ""; apellidoValidar : string = ""; cedulaValidar : string = "";  correoValidar : string  = "";
  telefonoValidar : string = ""; usuarioValidar : string = ""; claveValidar : string = "";
  
  nombreCampo : boolean = false; apellidoCampo : boolean = false; cedulaCampo : boolean = false;  correoCampo : boolean  =false;
  telefonoCampo : boolean = false; usuarioCampo : boolean = false; claveCampo : boolean = false;
  ngOnInit() {  }

  constructor(private userService: UserService, public ver : MatDialog) { 
    this.user = new User();
  
  }

  public saveOrUpdate(): void{   
    if(this.user.nombre == "" || this.user.nombre == null){//Validaciones
      this.validar = true;
      this.nombreCampo = true;
      this.nombreValidar = "Este campo Nombre es necesario"
      
    }
    if(this.user.apellido == "" || this.user.apellido == null){//Validaciones
      this.validar = true;
      this.apellidoValidar = "El  campo Apellido es necesario"
      this.apellidoCampo = true; 
    }
    if(this.user.cedula == "" || this.user.cedula == null){//Validaciones
      this.validar = true;
      this.cedulaValidar = "No olvides la  ' Cedula ' es muy importante" 
      this.cedulaCampo = true;
    }
    if(this.user.correo == "" || this.user.correo == null){//Validaciones
      this.validar = true;
      this.correoValidar = "Completa este compo Correo autobu@APL.com"
      this.correoCampo = true;     
    }
    if(this.user.telefono == "" || this.user.telefono == null){//Validaciones
      this.validar = true;
      this.telefonoValidar  = "Este campo Telefono ¿ Donde llamamos ? "
      this.telefonoCampo = true;
    }
    if(this.user.usuario == "" || this.user.usuario == null){//Validaciones
      this.validar = true;
      this.usuarioValidar = "El  campo Usuario es necesario";
      this.usuarioCampo = true;
    }
    if(this.user.clave == "" || this.user.clave == null){//Validaciones
      this.validar = true;
      this.claveValidar = "Este campo Clave es necesario"
      this.claveCampo = true;  
    }
    else{
      this.userService.saveOrUpdate(this.user)      
      .subscribe( dato => { this.ver.open(ModalUserCrear )   } )
    }    
  }
      
  elementos = [
    {id: 1, name: "Invitado"},
    {id: 2, name: "...."},
    {id: 3, name: "Junta"},
    {id: 4, name: "Jefe Talle"},
    {id: 5, name: "Ingeniero"},
    {id: 6, name: "Gerencia"},
    {id: 7, name: "Administrador"}
  ];
}
@Component({  
  templateUrl: './modalUserCrea.html',  
  providers: [UserService]
})
export class ModalUserCrear{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public cerrar : MatDialog){}
  cerrarModalCrea(){
    this.cerrar.closeAll()
  }
}
