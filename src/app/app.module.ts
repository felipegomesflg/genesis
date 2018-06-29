import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CaixaComponent } from './pages/caixa/caixa.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';

import { LocalStorageModule } from 'angular-2-local-storage';

import { AuthGuard } from './services/auth.service';
import { ComumService } from './services/comum.service';
import { DataService } from './services/data.service'
//ROUTER
import { routing,appRoutingProviders } from './app.routing';
import { ClienteComponent } from './pages/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ProdutosComponent,
    CaixaComponent,
    RelatoriosComponent,
    FornecedoresComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing, 

    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'dot-genesis',
      storageType: 'localStorage'
  }),
  ],
  providers: [AuthGuard,ComumService,DataService,appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
