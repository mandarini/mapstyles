import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GmapService } from './gmap.service';

import { AppComponent } from './app.component';
import { GmapComponent } from './gmap/gmap.component';
import { ControlsComponent } from './controls/controls.component';


@NgModule({
  declarations: [
    AppComponent,
    GmapComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
