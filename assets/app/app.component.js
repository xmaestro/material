"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var AppComponent = (function () {
    function AppComponent(dialog, vcr) {
        this.dialog = dialog;
        this.vcr = vcr;
        this.dogs = [
            { rows: 2, name: "Mal", human: "Jeremy", age: 5 },
            { rows: 1, name: "Molly", human: "David", age: 5 },
            { rows: 1, name: "Sophie", human: "Alex", age: 8 },
            { rows: 2, name: "Taz", human: "Joey", age: '11 weeks' },
            { rows: 1, name: "Kobe", human: "Igor", age: 5 },
            { rows: 2, name: "Porter", human: "Kara", age: 3 },
            { rows: 1, name: "Stephen", human: "Stephen", age: 8 },
            { rows: 1, name: "Cinny", human: "Jules", age: 3 },
            { rows: 1, name: "Hermes", human: "Kara", age: 3 },
        ];
        this.currentDog = {};
        this.isDarkTheme = false;
    }
    AppComponent.prototype.openDialog = function () {
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = this.vcr;
    };
    AppComponent.prototype.showDog = function (dog) {
        this.currentDog = dog;
        this.sidenav.open();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('sidenav'),
    __metadata("design:type", material_1.MdSidenav)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'http://localhost:1337/app/views/index.ejs'
    }),
    __metadata("design:paramtypes", [material_1.MdDialog, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map