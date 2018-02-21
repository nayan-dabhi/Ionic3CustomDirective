import { Component, Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, Events } from 'ionic-angular';

@Component({
  selector: 'page-select-search',
  templateUrl: 'select-search.html'
})

export class ModalSelectModal {
  public contentEle: any;
  public title: string = "";
  public options: any;
  public selectedItem: any;
  public selectedItemIndex: string = "";
  public showNoTextMsg: boolean = false;
  public showSearchTextBox: boolean = false;
  public showClear: boolean = true;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public eventsCtrl: Events) {
    this.title = "Select option";
    this.contentEle = this.navParams.get('content');
    this.selectedItemIndex = this.navParams.get('index');

    if (this.navParams.get('show_clear') != null) {
      this.showClear = this.navParams.get('show_clear');
    }

    this.initializeItems();
  }

  initializeItems() {
    this.options = this.navParams.get('options');

    if (this.options != null && this.options.length > 0) {
      this.showNoTextMsg = false;
      this.showSearchTextBox = true;

      if (this.selectedItemIndex != null) {
        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].key == this.selectedItemIndex) {
            this.selectedItem = this.options[i];
            break;
          }
        }
      }
    } else {
      this.showNoTextMsg = true;
      this.showSearchTextBox = false;
    }
  }

  dismiss() {
    if (this.viewCtrl != null) {
      this.viewCtrl.dismiss();
    }
  }

  onSearchItems(ev: any) {
    this.initializeItems();

    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.options = this.options.filter((item) => {
        return (item['value'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

    if (this.options.length <= 0) {
      this.showNoTextMsg = true;
    } else {
      this.showNoTextMsg = false;
    }
  }

  itemSelected(item) {
    this.selectedItem = item;
    this.contentEle.innerHTML = item.value;

    let tempData = {
      "data": this.selectedItem,
      "element": this.contentEle
    };

    this.eventsCtrl.publish("search-select:refresh_value", (tempData));
    this.viewCtrl.dismiss();
  }

  clearData() {
    this.selectedItem = null;
    this.contentEle.innerHTML = "";

    let tempData = {
      "data": { key: "", value: "" },
      "element": this.contentEle
    };

    this.eventsCtrl.publish("search-select:refresh_value", (tempData));
  }
}

@Directive({
  selector: '[modalSelect]',
  host: {
    '(click)': 'showModal()'
  }
})

export class SelectSearchDirective implements OnInit {
  @Input() data: any;
  @Input() dataIndex: any;
  @Input() showClear: any;

  constructor(
    public navCtrl: NavController,
    public _elementRef: ElementRef,
    public modalCtrl: ModalController,
    public eventsCtrl: Events,
    private renderer: Renderer2) { }

  ngOnInit() {
    console.log("this.data", this.data);
    console.log("this.dataIndex", this.dataIndex);
    console.log("this.showClear", this.showClear);

    setTimeout(() => {
      if (this.dataIndex != null && this.dataIndex != "" && this.dataIndex != "0") {
        this.setAutoSelectValue();
      } else {
        this._elementRef.nativeElement.innerHTML = "";
      }
    }, 1500);

    this.renderer.setStyle(this._elementRef.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
  }

  setAutoSelectValue() {
    if (this.data != null) {
      for (let i = 0; i < this.data.length; i++) {
        let isFound: boolean = false;

        if (this.data[i].key == this.dataIndex) {
          isFound = true;

          this.dataIndex = this.data[i].key;
          this._elementRef.nativeElement.innerHTML = this.data[i].value;
          break;
        }

        if (isFound == false) {
          this._elementRef.nativeElement.innerHTML = "";
        }
      }
    }
  }

  showModal() {
    if (this._elementRef.nativeElement) {
      // console.log(this._elementRef.nativeElement);

      let modal = this.modalCtrl.create(ModalSelectModal, {
        content: this._elementRef.nativeElement,
        options: this.data,
        index: this.dataIndex,
        show_clear: this.showClear
      });

      modal.present();
    }
  }
}
