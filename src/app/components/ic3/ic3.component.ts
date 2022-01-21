import { Component, OnInit } from '@angular/core';
import { S2Service } from '../s2.service';

@Component({
  selector: 'app-ic3',
  templateUrl: './ic3.component.html',
  styleUrls: ['./ic3.component.css'],
  providers: [S2Service],
})
export class Ic3Component implements OnInit {
  constructor(public s1service: S2Service) {}

  ngOnInit(): void {}
}
