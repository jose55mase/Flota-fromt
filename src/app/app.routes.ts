import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { EntrarAppComponent } from './entrar-app/entrar-app.component';
import { UserCrearComponent } from './usuarios/usuario.crear/user-crear.component';
import { AutobusesComponent } from './autobuses/autobus.component';
import { FacturaComponent } from './facturacion/crear/factura-crear.component';
import { ConductorComponent } from './conductor/conductor.component';
import { TablasComponent } from './tablas/tablascomponent';
import { PermisosComponent } from './permisos/permisos.component';



const APP_ROUTES: Routes = [
   // { path: '', redirectTo: 'usuarios-router', pathMatch: 'full' },     
    { path: 'usuarios-router', component: UsuariosComponent },
    { path : 'mantenimiento-router', component : MantenimientoComponent },
    { path : 'entrar-router', component : EntrarAppComponent },
    { path : 'autobuse-router', component : AutobusesComponent },
    { path : 'factura-router', component : FacturaComponent },
    { path : 'conductor-router', component : ConductorComponent },
    { path : 'tablas-router', component : TablasComponent },
    { path : 'permisos-router', component : PermisosComponent }
   
    // { path: 'saludo', component:  }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }