import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { CepModule } from './modules/cep/cep.module';
import { BuscarComponent } from './modules/cep/buscar/buscar.component';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CepModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
