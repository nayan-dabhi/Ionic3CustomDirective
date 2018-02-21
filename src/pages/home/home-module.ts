import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { DirectivesModule } from '../../directives/DirectivesModules';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(HomePage),
  ],
})

export class HomePageModule { }
