import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicationService implements OnDestroy {

  private valueToBePassed = new Subject<string>;
  valueToBePassed$ = this.valueToBePassed.asObservable();

  constructor() { }

  ngOnDestroy(): void {
    console.log("On Destroy");
  }

  sendMessage(message: string){
    this.valueToBePassed.next(message);
  }
}
