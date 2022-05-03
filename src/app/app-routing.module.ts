import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CallusComponent } from './about/callus/callus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
      {path: "about", component : AboutComponent, 
      children: [{path: "callus", component : CallusComponent}]},
      {path: "contactus", component : ContactusComponent},
      {path: "**", component : NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
