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
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.product = {
                        productName: "",
                        priductDec: "",
                        categoryName: "",
                        unit: ""
                    };
                    this.http.get('/api/getProducts') /// get Products...
                        .subscribe(function (res) {
                        _this.getProduct = res.json().data;
                        console.log(res.json().data);
                    });
                    this.http.get('/api/getCategory') /// GEt Category..
                        .subscribe(function (res) {
                        _this.getCategory = res.json().data;
                        console.log(res.json().data);
                    });
                }
                ProductComponent.prototype.send = function (product) {
                    console.log(product);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    this.http.post('/api/Category', JSON.stringify(this.product), options)
                        .subscribe(function (res) {
                        console.log("Craete Products: ", res);
                    });
                    ; //http.post
                };
                ProductComponent = __decorate([
                    //for http request (rest API)
                    core_1.Component({
                        selector: 'about',
                        templateUrl: "./app/components/product/product.html"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductComponent);
                return ProductComponent;
            }());
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
