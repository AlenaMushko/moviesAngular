import {Component, Input} from '@angular/core';
import {IProductionCompanies} from "../../../../interfaces";

@Component({
  selector: 'app-production-img',
  templateUrl: './production-img.component.html',
  styleUrls: ['./production-img.component.css']
})
export class ProductionImgComponent {
@Input()
productionArr:IProductionCompanies[];


}
