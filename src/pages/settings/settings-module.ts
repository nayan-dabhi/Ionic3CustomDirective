import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SettingsPage } from './settings';
import { DirectivesModule } from '../../directives/DirectivesModules';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(SettingsPage),
  ],
})

export class SettingsPageModule { }
