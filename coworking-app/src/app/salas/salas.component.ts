import { SalasService } from './salas.service';
import { Component, OnInit } from '@angular/core';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  constructor(public salasService: SalasService) { 
    this.salasService = salasService
   }

   salasSerivce: SalasService

  ngOnInit(): void {

  }

}
