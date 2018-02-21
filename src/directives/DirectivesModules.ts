import { NgModule } from "@angular/core"

import { Ionic2MaskDirective } from './ionic2-mask-directive';
import { ShadowDirective } from './shadow-directive';

@NgModule({
  declarations: [
    Ionic2MaskDirective,
    ShadowDirective
  ],
  imports: [],
  exports: [
    Ionic2MaskDirective,
    ShadowDirective
  ]
})

export class DirectivesModule {

}
