import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css'],
})
export class C3Component implements OnInit {
  constructor(public s1service: S1Service) {}

  ngOnInit(): void {}
}
