import { Component, OnInit } from '@angular/core';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-dc2',
  templateUrl: './dc2.component.html',
  styleUrls: ['./dc2.component.css'],
})
export class Dc2Component implements OnInit {
  constructor(public s1service: S3Service) {}

  ngOnInit(): void {}
}
