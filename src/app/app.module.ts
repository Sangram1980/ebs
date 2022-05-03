import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CallusComponent } from './about/callus/callus.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactusComponent,
    NopagefoundComponent,
    CallusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
