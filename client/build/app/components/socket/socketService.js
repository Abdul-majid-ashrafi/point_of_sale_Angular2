System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SocketService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SocketService = (function () {
                function SocketService() {
                    var _this = this;
                    this.fruits = ['Pineapple'];
                    this.host = window.location.origin;
                    console.log("WEBSOCKET connecting to", this.host);
                    this.socket = io();
                    //getting all last record from server if restored or default array
                    this.get();
                    //listing if add fruit on server then server emits the fruit name
                    this.socket.on("addedFruit", function (data) {
                        _this.fruits.push(data);
                        console.log('addedFruit this.fruits', _this.fruits);
                    });
                }
                SocketService.prototype.add = function (fruitName) {
                    this.socket.emit('addFruit', fruitName);
                };
                SocketService.prototype.getAllFruits = function () {
                    return this.fruits;
                };
                SocketService.prototype.get = function () {
                    //catching from sever when it emits  (all fruits)..
                    this.socket.on('getAllFruits', function (data) {
                        ///this.fruits = data;
                        console.log('getAllFruits: ', data);
                    });
                    //sending request to fire all fruits from server and catching from server events (getAllFruits)
                    this.socket.emit('getFruits', null);
                };
                SocketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SocketService);
                return SocketService;
            }());
            exports_1("SocketService", SocketService);
        }
    }
});
// let host = window.location.origin;
// console.log("WEBSOCKET connecting to", host); 
