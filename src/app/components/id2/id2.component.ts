import { Component, OnInit } from '@angular/core';
import { S2Service } from '../s2.service';
@Component({
  selector: 'app-id2',
  templateUrl: './id2.component.html',
  styleUrls: ['./id2.component.css'],
  providers: [S2Service],
})
export class Id2Component implements OnInit {
  constructor(public s1service: S2Service) {}

  ngOnInit(): void {}
}
