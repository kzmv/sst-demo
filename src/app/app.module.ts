import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
