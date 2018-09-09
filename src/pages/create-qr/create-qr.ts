import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'create-qr',
  templateUrl: 'create-qr.html'
})
export class CrearQR {
	pictureURI : string;	
  constructor(public navCtrl: NavController) {
  	this.pictureURI = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%7B%22ot": "0001","dOp": [{"alias": ""},{"cl": "01212121212121221"},{"type": "TC"},{"refn": ""},{"refa": "IVANCABRER"},{"amount": "5200"},{"bank": "00012"},{"country": "MX"},{"currency": "MXN"} ]}';
  }
  
}
