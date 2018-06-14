var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinanceiroPage = /** @class */ (function () {
    function FinanceiroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.qtd = [];
        for (var i = 1; i < 6; i++) {
            this.items.push({
                title: 'Produto ' + i,
                note: 'Produto #' + i
            });
        }
    }
    FinanceiroPage_1 = FinanceiroPage;
    FinanceiroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinanceiroPage');
    };
    FinanceiroPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(FinanceiroPage_1, {
            item: item
        });
    };
    var FinanceiroPage_1;
    FinanceiroPage = FinanceiroPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-financeiro',
            templateUrl: 'financeiro.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FinanceiroPage);
    return FinanceiroPage;
}());
export { FinanceiroPage };
//# sourceMappingURL=financeiro.js.map