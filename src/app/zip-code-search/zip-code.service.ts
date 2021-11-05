import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Street } from './street.interface';

@Injectable({
  providedIn: 'root',
})
export class ZipCodeService {
  public constructor(private httpClient: HttpClient) {}

  public getStreetData(zipCode: string): Observable<Street> {
    return this.httpClient.get<Street>(`${environment.API_URL}/${zipCode}/json/`);
  }
}
