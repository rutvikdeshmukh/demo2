import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class S1Service {
  startValue: number = 1;
  constructor() {}
  chnageStartValue(): void {
    this.startValue = this.startValue + 1;
  }
  display(): string {
    return `start value is ${this.startValue}`;
  }
}
