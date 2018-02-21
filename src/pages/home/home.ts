import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public user: any = {
    phone: "1"
  };

  public employee_id = "1";

  public mEmployeeDD: any = [{
    key: "1",
    value: "first"
  }, {
    key: "2",
    value: "second"
  }, {
    key: "3",
    value: "third"
  },];

  constructor(
    public navCtrl: NavController,
    public eventsCtrl: Events,
  ) {
  }

  ionViewDidEnter() {
    this.eventsCtrl.subscribe("search-select:refresh_value", (data) => {
      this.onSearchSelectChangeValue(data);
    });
  }

  ionViewWillLeave() {
    this.eventsCtrl.unsubscribe("search-select:refresh_value");
  }

  onSearchSelectChangeValue(data) {
    if (data.element.id == "txtEmployee") {
      this.employee_id = data.data.key;
    }
  }

  onClickPage() {
    this.navCtrl.push(SettingsPage);
  }
}
