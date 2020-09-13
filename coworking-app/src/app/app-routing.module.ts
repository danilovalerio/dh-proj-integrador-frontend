import { ForgotComponent } from './template/esqueci-minha-senha/esqueci-minha-senha.component';
import { RegistroComponent } from './template/registro/registro.component';
import { MainComponent } from './template/main/main.component';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { LoginComponent } from './template/login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'esqueci-minha-senha', component: ForgotComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);