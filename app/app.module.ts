import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DecimalMask } from './decimal-mask.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, DecimalMask ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
