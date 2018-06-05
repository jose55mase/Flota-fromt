import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Dannos } from '../../modelo/dannos.modelo';
import { DannosService } from '../../reporte_dannos/dannosService';
import { Mantenimiento } from '../../modelo/mantenimiento.modelo';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive';



@Component({
  selector: 'creaDannos',
  templateUrl: './creaDannos.component.html',
  styleUrls: ['./creaDannos.component.css'],
  providers: [CreaDannosComponent]
})
export class CreaDannosComponent implements OnInit {
  private dannos : Dannos[];
  private danno : Dannos;
  formulario : FormGroup;
  informe :string; 
  constructor(private dannosService: DannosService, private fb:FormBuilder) {
    this.danno = new Dannos();    
  }
  
  ngOnInit(){ this.validar(); }
  
  public validar( ){
   this.formulario = this.fb.group({
     'titulo':[null, Validators.compose([Validators.required, Validators.minLength(6)])],
     'vehiculo':[null, Validators.required],
     'fecha':[null, Validators.required],
     'informe': [null,Validators.compose([Validators.required , Validators.maxLength(10)])]
  

   })
  }
  add(algo){
    this.informe = algo.informe;
  }
  //Gurdar daños
  public saveDannos(): void{
    this.dannosService.guardarDanno(this.danno).subscribe( dato =>{ alert("listo") });
    
  }

  vehiculo: any=[
    {id: 1 ,name : '12-AB', ruta : 'Laureles'  },
    {id: 2 ,name : '45-B', ruta : 'Laureles'  },
    {id: 3 ,name : '1-LFB-H', ruta : 'Laureles'  },
    {id: 4 ,name : '1G-H', ruta : 'Poblado'  },
  ]
}

