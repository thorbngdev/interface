import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interface-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  model = 1;

  constructor() { }

  ngOnInit() {
  }

}
