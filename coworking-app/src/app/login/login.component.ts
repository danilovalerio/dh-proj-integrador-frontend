import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../authorize.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: string[];

  constructor(
    private router: Router,
    private authorizeService: AuthorizeService
  ) { }

  onSubmit() {
    this.router.navigate(['/main']);
    //console.log(`User: ${this.username}, Pass: ${this.password}`);
  }

  preparaCadastrar(event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authorizeService
      .salvar(usuario)
      .subscribe(response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login";
        this.cadastrando = false;
        this.errors = null;
        this.username = null;
        this.password = null;
      }, errorResponse => {
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
      });
  }

}
