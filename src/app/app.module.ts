import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmlCodePipe } from './htmlCode.pipe';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import {HttpClientModule} from "@angular/common/http";
import { PIsAsyncPipe } from './pis-async.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HtmlCodePipe, CustomSelectComponent, PIsAsyncPipe],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
