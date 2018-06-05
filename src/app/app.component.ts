import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from './usuarios/modeloUsuarios';
import { UserService } from './service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';


//declare var jquery:any;
//declare $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
  
})
export class AppComponent implements OnInit{
  heroForm: FormGroup;
  user : User;
  private users: User[];
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  ngOnInit(){ }
  constructor(private userService : UserService, private modalService: NgbModal){
    if (sessionStorage.getItem("user")) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.user = new User();     
    }
  }

  //Bienvenida
  logUsuario : String = "";
  logCargo  : String = "";
  lognombre : String = "";
  logApellido : String = "";
  usuarioLogMenu : boolean = false;

  //log para iniciio de sesion
  usuarios : string;
  claves : string;
  estado : boolean = false

  //Vistas respecto al tipo de usuario
  inicio : boolean = false;
  nosotros :boolean = false;
  logIn :boolean = true;
  ayudas :boolean = false;
  modulos :boolean = false;
  tablas :boolean = false;
  menu :boolean = false;
  material :boolean = false;
  permisos :boolean = false;
  conductor :boolean = false;
  dannos : boolean = false;

  //Permisos
  public crear = true;
  
  public verUsuario(user : User){       
    sessionStorage.setItem('user', JSON.stringify(user));     
  }
  ingresar() {
    this.userService.findAll().subscribe(
      users => {
        this.users = users;

        for (var elemento in this.users){         
          if(this.users[elemento].usuario == this.usuarios){            
            if(this.users[elemento].clave == this.claves){
              if(this.users[elemento].estado){
                this.logUsuario = this.users[elemento].usuario;                
                this.logCargo  = this.users[elemento].cargo;
                this.lognombre = this.users[elemento].nombre;
                this.logApellido = this.users[elemento].apellido;
                this.usuarioLogMenu = true;

                switch(this.users[elemento].cargo){
                   case "Administrador":{
                     this.inicio = true;
                     this.nosotros = true;
                     this.logIn = true;
                     this.ayudas = true;
                     this.modulos = true;
                     this.tablas = true;
                     this.menu = true;
                     this.material = true;
                     this.permisos = true;
                     this.conductor = true;
                     this.crear = true;
                     this.dannos = true;          
                     break;
                   }
                   case "Jefe Taller":{
                    this.inicio = true;
                    this.nosotros = true;
                    this.logIn = true;
                    this.ayudas = true;
                    this.menu = true;
                    this.material = true;
                    break;
                   }
                   case "Gerencia":{
                    this.inicio = true;
                    this.nosotros = true;
                    this.logIn = true;
                    this.ayudas = true;
                    this.modulos = true;                    
                    this.menu = true;
                    this.material = true;  
                    break;
                   }
                   case "Junta":{
                    this.inicio = true;
                    this.nosotros = true;
                    this.logIn = true;
                    this.ayudas = true;
                    this.modulos = true;                    
                    this.menu = true;
                    this.material = true; 
                    this.dannos = true; 
                    break;
                   }
                   case "Invitado":{
                    this.inicio = true;
                    this.nosotros = true;
                    this.ayudas = true;
                    this.dannos = true;
                    break;
                   }
                }                
              }if(!this.users[elemento].estado){
                alert("usuario inactivo")
              }
             
            }
          } 
        }
        if(this.users[elemento].usuario == this.usuarios){ alert("El usuario no Existe ") }
        if(this.usuarios == null){ alert("") }    
      }
    )
  }// Log de ingreso
  
  cerrarSesion(){
    this.inicio = false;
    this.nosotros = false;
    this.logIn = true;
    this.ayudas = false;
    this.modulos = false;
    this.tablas = false;
    this.menu = false;
    this.material = false;   
    this.usuarioLogMenu = false;
    this.usuarios = null;
    this.claves = null;
    this.ayudas = false;
    this.permisos = false;
    this.dannos = false;
    this.conductor = false;
  }


/// lista Modal
name = 'World';
closeResult: string;

 

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  
}
 
