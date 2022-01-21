import { Component, OnInit } from '@angular/core';
import { S2Service } from '../s2.service';
@Component({
  selector: 'app-ic1',
  templateUrl: './ic1.component.html',
  styleUrls: ['./ic1.component.css'],
  providers: [S2Service],
})
export class Ic1Component implements OnInit {
  constructor(public s1service: S2Service) {}

  ngOnInit(): void {}
}
