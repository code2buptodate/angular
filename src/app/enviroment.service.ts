import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  constructor() { }

  public getUrl = (): string => {
    return environment.urlAddress;
  }
}
