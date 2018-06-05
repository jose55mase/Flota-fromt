import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'factura-root',
  templateUrl: './factura-crear.component.html',
  styleUrls: ['./factura-crear.component.css']

})
export class FacturaComponent{
  columnas = ['Producto' ,'Descripcion' ,'Cantidad'];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  myDate: any = new Date();
}
