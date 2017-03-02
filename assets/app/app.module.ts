import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MaterialModule } from '@angular/material';
import * as hammerjs from 'hammerjs';

@NgModule({
    declarations: [AppComponent],
    imports:      [
        BrowserModule,
        MaterialModule
        ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
