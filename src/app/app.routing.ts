import {ModuleWithProviders}  from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { CaixaComponent } from './pages/caixa/caixa.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';

import { AuthGuard } from './services/auth.service';

const APP_ROUTES: Routes=[
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuard] },
    {path: 'caixas', component: CaixaComponent, canActivate: [AuthGuard] },
    {path: 'clientes', component: ClienteComponent, canActivate: [AuthGuard] },
    {path: 'relatorios', component: RelatoriosComponent, canActivate: [AuthGuard] },
    {path: 'fornecedores', component: FornecedoresComponent, canActivate: [AuthGuard] },
    

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
