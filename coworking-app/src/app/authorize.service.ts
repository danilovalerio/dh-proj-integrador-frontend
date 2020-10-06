import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';

//url do ambiente
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  apiURL: string = environment.apiURL + '/api/usuarios';
  tokenURL: string = environment.apiURL + environment.obterTokenUrl;
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    //parametros http enviados para a api
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic Auth' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post( this.tokenURL, params.toString(), { headers });

  }
}
