import {Component, Input, OnInit, Output} from '@angular/core';
import {IWindow} from "../../window";
import {Catalogo} from "../../catalogo";

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  @Output() Value: Catalogo
  @Input() Options: Catalogo[]
  @Input() Window: IWindow

  constructor() { }

  ngOnInit() {
  }

}
