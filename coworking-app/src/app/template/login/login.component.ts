import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginSuccess: Boolean = false
    errors: String[] = []

    //exemplos de uso
    userEmail: String = ""
    userPass: String = ""

    ngOnInit(): void {
    }

    logar(): void {
        //alert("usuário: " + this.userEmail + "\n senha:" + this.userPass);
        //testa validações no front
        this.validarTamanho()
    }

    validarTamanho() {
        console.log(this.userEmail.length)
        this.errors = []


        console.log(this.userEmail.toString().length)
        if (this.userEmail.length <= 0 || this.userEmail.length == undefined) {
            this.errors.push("E-mail não pode ser vazio")
        }

        if (this.userPass.length <= 0 || this.userPass == undefined) {
            this.errors.push("Senha não pode ser vazia")
        }

    }
}