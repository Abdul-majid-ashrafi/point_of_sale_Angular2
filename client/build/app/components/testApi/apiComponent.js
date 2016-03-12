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
    var ApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ApiComponent = (function () {
                function ApiComponent(http) {
                    //constructor
                    this.http = http;
                    //calling test api (testing)
                    this.testApi();
                }
                ApiComponent.prototype.testApi = function () {
                    var _this = this;
                    this.http.request('http://localhost:4000/api/test')
                        .subscribe(function (res) {
                        _this.receivedFromServer = res.json();
                    }); //http.request 
                };
                ApiComponent = __decorate([
                    //for http request (rest API)
                    core_1.Component({
                        selector: 'test-api',
                        template: '<h1> Api </h1> <div> <pre> {{receivedFromServer | json}} </pre> </div>',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApiComponent);
                return ApiComponent;
            }());
            exports_1("ApiComponent", ApiComponent);
        }
    }
});
