import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { SideNavComponent } from './components/side-nav/side-nav.component';

import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // SideNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule
    // SideNavComponent
  ]
})
export class SharedModule { }
