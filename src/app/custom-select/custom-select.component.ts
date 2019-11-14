import { Component, OnInit } from "@angular/core";
import { EstiloSelect } from "../shared/estiloSelect";
import { Estilos } from "../shared/estilos";
import { EstilosService } from "../service/estilos.service";

@Component({
  selector: "app-custom-select",
  templateUrl: "./custom-select.component.html",
  styleUrls: ["./custom-select.component.css"]
})
export class CustomSelectComponent implements OnInit {
  constructor(private estilosService: EstilosService) {}
  estilo: EstiloSelect;
  ngOnInit() {
    this.estilosService.getEstilos().subscribe(estilo => {
      this.estilo = estilo.controls.find(element => element.id === 22916);
      console.log(this.estilo);
    });
  }
}
