import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  
} from '@angular/material';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppRoutingModule } from './app.routes';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { EntrarAppComponent } from './entrar-app/entrar-app.component';
import { ModulosComponent } from './modulos/modulos.component';
import { UserCrearComponent, ModalUserCrear } from './usuarios/usuario.crear/user-crear.component';
import { UserService } from './usuarios/usuario.crear/user-crear.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalUserVista, UserListComponent } from './usuarios/usuario-lista/user-list.component';
import { ModalUserEditar, UserEditarComponent } from './usuarios/usuario-editar/user-editar.component';
import { ModalUserEliminar, UserEliminarComponent } from './usuarios/usuario-eliminar/user-eliminar.component';
import { AutobusesComponent } from './autobuses/autobus.component';
import { FacturaComponent } from './facturacion/crear/factura-crear.component';
import { ConductorComponent } from './conductor/conductor.component';
import { TablasComponent } from './tablas/tablascomponent';
import { PermisosComponent } from './permisos/permisos.component';
import { CreaMantenimientoComponent } from './mantenimiento/crea/creaMantenimiento.component';
import { ListarMantenimientoComponent } from './mantenimiento/listar/listarMantenimiento.component';
import { DannosComponent } from './reporte_dannos/dannos.component';
import { CreaDannosComponent } from './reporte_dannos/crea/creaDannos.component';
import { ListaDannosComponent, ModalDannosVer } from './reporte_dannos/lista/listaDannos.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';




@NgModule({
  declarations: [

    ForbiddenValidatorDirective,
    HeroFormReactiveComponent, 

    AppComponent,
    UsuariosComponent,
   
    EntrarAppComponent,
    ModulosComponent,
    ConductorComponent,
    TablasComponent,
    PermisosComponent,

    //mantenimiento ----------------
    MantenimientoComponent
    ,CreaMantenimientoComponent
    ,ListarMantenimientoComponent

    //Reporte Daños -----------------
    ,DannosComponent
    ,CreaDannosComponent
    ,ListaDannosComponent
    ,ModalDannosVer

    //usuario
    ,UserEditarComponent
    ,UserEliminarComponent
    ,AutobusesComponent

    ,UserCrearComponent
    ,UserListComponent
    ,ModalUserVista
    ,ModalUserEditar
    ,ModalUserEliminar
    ,ModalUserCrear,
    //facturacion
    FacturaComponent
  ],

  entryComponents: [
    EntrarAppComponent
    
    //,DialogDataExampleDialog
    ,ModalUserVista
    ,ModalUserEliminar
    ,ModalUserEditar
    ,ModalUserCrear

    ,ModalDannosVer
    
  ],

  imports: [
    NgbModule.forRoot(),    
    CdkTableModule,
    BrowserModule,
    DataTablesModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatExpansionModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class AppModule { }
