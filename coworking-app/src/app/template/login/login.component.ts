import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { AuthorizeService } from 'src/app/authorize.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginSuccess: Boolean = false
    errors: String[] = []

    //exemplos de uso
    userName: string = ""
    userPass: string = ""

    logar(): void {
        //alert("usuário: " + this.userEmail + "\n senha:" + this.userPass);
        //testa validações no front
        this.validarTamanho()
    }

    validarTamanho() {
        console.log(this.userName.length);
        this.errors = [];


        console.log(this.userName.toString().length)
        if (this.userName.length <= 0 || this.userName.length == undefined) {
            this.errors.push("E-mail não pode ser vazio")
        }

        if (this.userPass.length <= 0 || this.userPass == undefined) {
            this.errors.push("Senha não pode ser vazia")
        }

    }
}