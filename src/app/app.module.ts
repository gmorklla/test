import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HtmlCodePipe } from "./htmlCode.pipe";
import { RestangularModule, Restangular } from "ngx-restangular";
import { RestangularConfigFactory } from "./shared/restConfig";

import { EstilosService } from "./service/estilos.service";
import { baseURL } from "./shared/baseurl";
import { CustomSelectComponent } from "./custom-select/custom-select.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HtmlCodePipe, CustomSelectComponent],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    HttpClientModule
  ],
  providers: [EstilosService, { provide: "BaseURL", useValue: baseURL }],
  bootstrap: [AppComponent]
})
export class AppModule {}
