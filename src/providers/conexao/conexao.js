var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the ConexaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConexaoProvider = /** @class */ (function () {
    function ConexaoProvider(http, http2) {
        this.http = http;
        this.http2 = http2;
        console.log('Hello ConexaoProvider Provider');
    }
    ConexaoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, HTTP])
    ], ConexaoProvider);
    return ConexaoProvider;
}());
export { ConexaoProvider };
this.http.get('http://modelos.4pix.com.br/cav/PacientesAPI/pacientes/13050')
    .then(function (data) {
    //data.data é onde está o resultado dos dados que você consultou
})
    .catch(function (error) {
    //erro.erro é onde está a mensagem do erro que aconteceu
});
//# sourceMappingURL=conexao.js.map