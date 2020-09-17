import { Component, OnInit } from '@angular/core';

import { Sala } from 'src/app/sala';
import { SalasService } from 'src/app/salas.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  salas: Sala[] = [];

  constructor(private service: SalasService) { }

  ngOnInit(): void {
    console.log(this.service.getSalas());
    this.salas = this.service.getSalas();
  }

}
