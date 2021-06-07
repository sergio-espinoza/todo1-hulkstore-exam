import { Component, Input } from "@angular/core";
import { IExternalLoader } from "src/app/models";

@Component({
  selector: 'app-external-loader',
  templateUrl: './external-loader.component.html',
  styleUrls: ['./external-loader.component.scss']
})
export class ExternalLoaderComponent {
  @Input()
  public loaderProperties: IExternalLoader = {
    leftPercentaje: '0%',
    topPercentaje: '0%',
    visibility: 'hidden',
    backgroundColorClass: 'bg-primary',
    iconSource: 'assets/images/icons/logo-hulk-store.svg',
  }
}

