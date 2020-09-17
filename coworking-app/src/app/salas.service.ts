import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from './sala';

@Injectable({
  providedIn: 'root'
})
//classe responsável por fazer comunicar com a api 
export class SalasService {

  constructor() {}

  getSalas(): Sala[] {
    let sala: Sala = new Sala(1, "Sala Um", 10);
    let sala2: Sala = new Sala(2, "Auditório", 10);
    let sala3: Sala = new Sala(3, "Sala Dois", 10);

    let salas:Sala[] = [];

    salas.push(sala);
    salas.push(sala2);
    salas.push(sala3);
    salas.push(sala);
    salas.push(sala2);
    salas.push(sala3);
    salas.push(sala2);
    salas.push(sala3);

    return salas;
  }


}


/*  let sala: Sala = new Sala();
  sala = Sala(1, "Um", 10);
  let sala2: Sala = new Sala(1, "Um", 10);
  let sala3: Sala = new Sala(1, "Um", 10);
*/
