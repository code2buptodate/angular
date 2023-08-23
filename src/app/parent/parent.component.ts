import { Component, OnInit } from '@angular/core';

import { Citizen, HEROES } from '../hero';
import { BackendService } from '../backend.service';
import { filter } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less'],
  providers: [CommunicationService]

})
export class ParentComponent implements OnInit {
  citizenData!: Citizen[];
  constructor(private backendservice: BackendService, private com: CommunicationService) { 
    this.backendservice.getData().subscribe((data: Citizen[]) => {
      this.citizenData = data
    });
  }

  ngOnInit(): void {
    this.com.valueToBePassed$.subscribe((message: string) => {
      console.log(message);
    })
  }

  onDataFromChild(messag: string){
    console.log(messag);
  }

  age = 34;
  heros = HEROES;

}
