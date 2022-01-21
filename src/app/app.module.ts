import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { S1Service } from './s1.service';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { MatCardModule } from '@angular/material/card';
import { Ic1Component } from './components/ic1/ic1.component';
import { Id2Component } from './components/id2/id2.component';
import { Dc1Component } from './default/dc1/dc1.component';
import { Dc2Component } from './default/dc2/dc2.component';
import { Dc3Component } from './default/dc3/dc3.component';
import { Ic3Component } from './components/ic3/ic3.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    Ic1Component,
    Id2Component,
    Dc1Component,
    Dc2Component,
    Dc3Component,
    Ic3Component,
  ],
  imports: [BrowserModule, MatCardModule],
  providers: [S1Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
