import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Citizen, Hero } from '../hero';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() hero!: Citizen;
  @Input('age') fromParent = 0;
  @Output('childData') dataFromChild = new EventEmitter<string>;

  constructor(private communication: CommunicationService) { }

  ngOnInit(): void {
    this.dataFromChild.emit("meesage from the child");
    this.communication.sendMessage("This is Message from Zelalem");
  }

  // message(message: string){
  //   this.dataFromChild.emit("meesage from the child");
  // }
}
