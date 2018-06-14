import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http';




/*
  Generated class for the ConexaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConexaoProvider {

  constructor(public http: HttpClient, public _http:HTTP) {
    console.log('Hello ConexaoProvider Provider');
  }

}

this._http.get('http://modelos.4pix.com.br/cav/PacientesAPI/pacientes/13050')
  .then(data => {
  
//data.data é onde está o resultado dos dados que você consultou
   
  })
  .catch(error => {
//erro.erro é onde está a mensagem do erro que aconteceu
  });
