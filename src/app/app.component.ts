import {Component, OnInit} from '@angular/core';
import {RestService} from "./services/rest.service";
import {JSONREST} from "./services/jsonRest";
import {Catalogo} from "./catalogo";
import {IWindow} from "./window";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  catalogo: any
  window: IWindow

  constructor(private restService: RestService) {
    this.restService.getCatalogo()
      .subscribe(
        () => console.warn(''),
        rr => this.catalogo = JSONREST.catalogos)
    this.restService.getWindow()
      .subscribe(
        (resp: IWindow) => this.window = resp,
        err => console.log(JSONREST.Window_1))
  }

  ngOnInit(): void {

  }

}
