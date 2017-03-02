import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";

@Component({
    selector: 'my-app',
    templateUrl: 'http://localhost:1337/app/views/index.ejs'
})
export class AppComponent {

    dogs = [
    {rows: 2, name: "Mal", human: "Jeremy", age: 5},
    {rows: 1, name: "Molly", human: "David", age: 5},
    { rows: 1, name: "Sophie", human: "Alex", age: 8},
    {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
    { rows: 1, name: "Kobe", human: "Igor", age: 5},
    {rows: 2, name: "Porter", human: "Kara", age: 3},
    { rows: 1, name: "Stephen", human: "Stephen", age: 8},
    {rows: 1, name: "Cinny", human: "Jules", age: 3},
    { rows: 1, name: "Hermes", human: "Kara", age: 3},
  ];
  @ViewChild('sidenav') sidenav: MdSidenav;
  currentDog = {};
  isDarkTheme = false;

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
  }

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }

 }
