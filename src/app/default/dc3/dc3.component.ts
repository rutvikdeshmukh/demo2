import { Component, OnInit } from '@angular/core';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-dc3',
  templateUrl: './dc3.component.html',
  styleUrls: ['./dc3.component.css'],
})
export class Dc3Component implements OnInit {
  constructor(public s1service: S3Service) {}

  ngOnInit(): void {}
}
