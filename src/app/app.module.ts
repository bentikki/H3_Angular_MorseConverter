import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorseTranslaterComponent } from './morse-translater/morse-translater.component';
import { EncrypterPipe } from './morse-translater/encrypter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MorseTranslaterComponent,
    EncrypterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
