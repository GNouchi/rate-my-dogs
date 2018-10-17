import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stupidcomponent',
  templateUrl: './stupidcomponent.component.html',
  styleUrls: ['./stupidcomponent.component.css']
})
export class StupidcomponentComponent implements OnInit {
  @Input() sdawg:any
  constructor() { }
  ngOnInit() {  }

  // calc avg gere

}
