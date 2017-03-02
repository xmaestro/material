import {Component, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig, MdCard} from "@angular/material";

@Component({
    selector: 'my-app',
    templateUrl: 'http://localhost:1337/app/views/index.ejs',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  view = 'Register';

  constructor() {}

 }
