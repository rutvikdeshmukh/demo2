import { Component, OnInit } from '@angular/core';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-dc1',
  templateUrl: './dc1.component.html',
  styleUrls: ['./dc1.component.css'],
})
export class Dc1Component implements OnInit {
  constructor(public s1service: S3Service) {}

  ngOnInit(): void {}
}
