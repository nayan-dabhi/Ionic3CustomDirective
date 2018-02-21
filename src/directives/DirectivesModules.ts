import { NgModule } from "@angular/core";
import { IonicPageModule } from 'ionic-angular';

import { Ionic2MaskDirective } from './ionic2-mask-directive';
// import { ShadowDirective } from './shadow-directive';
import { SelectSearchDirective } from '../directives/select-search/select-search';

@NgModule({
  declarations: [
    Ionic2MaskDirective,
    // ShadowDirective,
    SelectSearchDirective
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    Ionic2MaskDirective,
    // ShadowDirective,
    SelectSearchDirective
  ]
})

export class DirectivesModule {

}
