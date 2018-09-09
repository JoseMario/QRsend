import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  logo : string;
  constructor() {
  	this.logo = '../../assets/imgs/MX_EUSV_Bancomer_Navy.png';
  }
}
