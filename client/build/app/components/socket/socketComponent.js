System.register(["angular2/core", "./socketService"], function(exports_1, context_1) {
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
    var core_1, socketService_1;
    var SocketComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (socketService_1_1) {
                socketService_1 = socketService_1_1;
            }],
        execute: function() {
            SocketComponent = (function () {
                // constructor    
                function SocketComponent(io) {
                    this.io = io;
                    this.fruitz = this.io.getAllFruits();
                }
                SocketComponent.prototype.add = function (name) {
                    if (name.trim().length > 2) {
                        this.io.add(name);
                    }
                };
                SocketComponent = __decorate([
                    core_1.Component({
                        selector: "socket",
                        templateUrl: "./app/components/socket/socket.html"
                    }), 
                    __metadata('design:paramtypes', [socketService_1.SocketService])
                ], SocketComponent);
                return SocketComponent;
            }());
            exports_1("SocketComponent", SocketComponent);
        }
    }
});
