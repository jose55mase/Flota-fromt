import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Mantenimiento } from '../../modelo/mantenimiento.modelo';
import { MantenimientoService } from '../serviceMantenimiento';
import { Dannos } from '../../modelo/dannos.modelo';
import { DannosService } from '../../reporte_dannos/dannosService';



@Component({
  selector: 'creaMantenimiento',
  templateUrl: './creaMantenimiento.component.html',
  styleUrls: ['./creaMantenimiento.component.css'],
  providers: [DannosService, MantenimientoService]
})
export class CreaMantenimientoComponent implements OnInit {
  private dannos : Dannos[];
  private mantenimiento :Mantenimiento
  formulario :FormGroup;
  informe :string;
  constructor(private mantenimientoService: MantenimientoService, private dannosService : DannosService, private fb : FormBuilder ) {
    this.mantenimiento = new Mantenimiento();
   }
    
  ngOnInit(){ this.listaDannos(); this.validar(); }


  // validaciones formulario
  public validar( ){
    this.formulario = this.fb.group({
      'titulo':[null, Validators.required],
      'estado':[null, Validators.required],
      'reporte':[null, Validators.required],
      'informe':[null, Validators.required]
    })
  }  

  add(algo){
    this.informe = algo.informe;
  }
  // Listar Dañops vehiculo
  public listaDannos(){
    this.dannosService.findAll().subscribe(
      dannos =>{
        this.dannos = dannos;       
      },  
      error => {
        console.log(error);
      }
    )
  }

  //Gurdar mantenimiento
  public saveMantenimiento(): void{
    this.mantenimientoService.guardarMantenimiento(this.mantenimiento).subscribe(
      dato => { alert("listo") }
    )

  }

  

}
