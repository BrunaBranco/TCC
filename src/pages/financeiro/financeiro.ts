import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinanceiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {

  selectedItem: any;
  items: Array<{title: string, note: string}>;
  selectedQtd: number;
  qtd: Array<{numeros:number}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    


    this.items = [];
    this.qtd=[];
    for (let i = 1; i < 6; i++) {
      this.items.push({
        title: 'Produto ' + i,
        note: 'Produto #' + i
      });
    }
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinanceiroPage');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FinanceiroPage, {
      item: item
    });
  }

}
