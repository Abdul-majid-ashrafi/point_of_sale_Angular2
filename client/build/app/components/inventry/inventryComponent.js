System.register(["angular2/core", 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var inventryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            inventryComponent = (function () {
                function inventryComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.add = {
                        categoryName: "",
                        productName: "",
                        userName: "",
                        rate: "",
                        unit: ""
                    };
                    this.http.get('/api/getCategory')
                        .subscribe(function (res) {
                        _this.getCategory = res.json().data;
                    });
                    this.http.get('/api/getProducts')
                        .subscribe(function (res) {
                        _this.getProducts = res.json().data;
                    });
                    this.http.get('/api/user/getUser')
                        .subscribe(function (res) {
                        _this.getUsers = res.json().data;
                    });
                    this.http.get('/api/rate/getRate')
                        .subscribe(function (res) {
                        _this.getRates = res.json().data;
                    });
                    this.http.get('/api/inven/getInventry')
                        .subscribe(function (res) {
                        _this.getInventry = res.json().data;
                        console.log(res.json().data);
                    });
                }
                inventryComponent.prototype.send = function (add) {
                    console.log(add);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    this.http.post('/api/inven/Inventry', JSON.stringify(add), options)
                        .subscribe(function (res) {
                        console.log("Craete Inventry: ", res);
                    });
                    ; //http.post
                };
                inventryComponent = __decorate([
                    //for http request (rest API)
                    core_1.Component({
                        selector: 'home',
                        templateUrl: "./app/components/inventry/inventry.html"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], inventryComponent);
                return inventryComponent;
            }());
            exports_1("inventryComponent", inventryComponent);
        }
    }
});
