import { ForgotComponent } from './esqueci-minha-senha/esqueci-minha-senha.component';
import { RegistroComponent } from './registro/registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardItemComponent } from './card-item/card-item.component';
import { LoginComponent } from './login/login.component';

//Necessário importar o módulo de rotas dos componentes dentro de template
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent, 
    MainComponent, 
    FooterComponent, 
    CardItemComponent,
    LoginComponent,
    RegistroComponent,
    ForgotComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, MainComponent, FooterComponent]
})
export class TemplateModule { }
