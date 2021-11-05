import { Component } from '@angular/core';

import { Street } from './street.interface';
import { ZipCodeService } from './zip-code.service';

@Component({
  selector: 'app-zip-code-search',
  templateUrl: './zip-code-search.component.html',
  styleUrls: ['./zip-code-search.component.css'],
})
export class ZipCodeSearchComponent {
  public streetData: Street;
  public zipCode: string = '';
  

  public constructor(private zipCodeService: ZipCodeService) {}

  public cleanStreetData() {
    this.streetData = null;
    this.zipCode = '';
  }
  public getStreetData(zipCode: string): void {
    this.zipCodeService
      .getStreetData(zipCode)
      .subscribe((streetData: Street) => (this.streetData = streetData));
  }
}
