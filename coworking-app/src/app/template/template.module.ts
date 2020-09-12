import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, MainComponent, FooterComponent]
})
export class TemplateModule { }
