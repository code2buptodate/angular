import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citizen } from './hero';
import { Observable } from 'rxjs';
import { EnviromentService } from './enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient, 
    private envService: EnviromentService) {
  }

  public getData = (): Observable<Citizen[]> => {
    return this.http.get<Citizen[]>(this.envService.getUrl());
  }
}
