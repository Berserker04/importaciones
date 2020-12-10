import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { SharedModule } from "./shared/shared.module";
import { SideNavComponent } from "./shared/components/side-nav/side-nav.component";
import { MaterialModule } from "./material/material.module";

import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    PageNoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
