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
    var SellingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SellingComponent = (function () {
                function SellingComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.sell = {
                        productName: "",
                        unit: "" };
                    this.http.get('api/sell/getSellers') /// get Sellers...
                        .subscribe(function (res) {
                        _this.getSellings = res.json().data;
                        console.log(res.json().data);
                    });
                    this.http.get('/api/inven/getInventry')
                        .subscribe(function (res) {
                        _this.getInventry = res.json().data;
                    });
                }
                SellingComponent.prototype.onChange = function (deviceValue) {
                    var _this = this;
                    this.http.get('/api/inven/getInventry')
                        .subscribe(function (res) {
                        res.json().data.forEach(function (data) {
                            if (data.productName === deviceValue) {
                                _this.selectRate = data.unit;
                            }
                            else {
                                console.log("ELSE......");
                            }
                        });
                    });
                };
                SellingComponent.prototype.send = function (sell) {
                    // console.log(sell.unit)
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    var corrent = sell.unit;
                    var total = this.selectRate;
                    var now = total - corrent;
                    console.log("Corrent ", corrent);
                    console.log("Total ", total);
                    console.log("Now ", now);
                    this.http.get('/api/inven/getInventry')
                        .subscribe(function (res) {
                        res.json().data.forEach(function (data) {
                            // console.log("Subscribe ", data.unit)
                            // if (data.productName === this.m) {
                            // this.selectRate = data.unit
                            // console.log("TM", this.selectRate)
                            // }
                            // else {
                            // console.log("ELSE.fdffdffdfdfd.....")
                            // }
                        });
                    });
                    // this.http.post('/api/sell/Selling', JSON.stringify(sell), options)
                    // .subscribe((res: Response) => {
                    // console.log("Craete Seller: ", res)
                    // });
                };
                SellingComponent = __decorate([
                    //for http request (rest API)
                    core_1.Component({
                        selector: 'selling',
                        templateUrl: "./app/components/selling/selling.html"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SellingComponent);
                return SellingComponent;
            }());
            exports_1("SellingComponent", SellingComponent);
        }
    }
});
