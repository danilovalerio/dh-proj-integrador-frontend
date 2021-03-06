import { Component, OnInit } from '@angular/core';

import { Sala } from 'src/app/salas/sala';
import { SalasService } from 'src/app/salas/salas.service';
declare var jQuery: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  salas: Sala[] = [];

  constructor(private service: SalasService) { }

  ngOnInit(): void {
  }

}
