import { Component } from '@angular/core';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

    onSubmit() {
        alert("Teste, registrar dados após validacao")
    }

}