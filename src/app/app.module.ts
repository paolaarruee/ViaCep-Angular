import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZipCodeSearchComponent } from './zip-code-search/zip-code-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: ZipCodeSearchComponent }]),
  ],
  declarations: [AppComponent, NavbarComponent, NavbarComponent, ZipCodeSearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}