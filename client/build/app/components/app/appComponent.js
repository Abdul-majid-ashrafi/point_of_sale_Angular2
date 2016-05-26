System.register(["angular2/core", "angular2/router", "./../home/homeComponent", "./../product/productComponent", "./../rate/rateComponent", "./../inventry/inventryComponent", "./../category/categoryComponent", "./../testApi/apiComponent", "./../socket/socketComponent", "./../form/formComponent", "./../selling/sellingComponent"], function(exports_1, context_1) {
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
    var core_1, router_1, homeComponent_1, productComponent_1, rateComponent_1, inventryComponent_1, categoryComponent_1, apiComponent_1, socketComponent_1, formComponent_1, sellingComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (homeComponent_1_1) {
                homeComponent_1 = homeComponent_1_1;
            },
            function (productComponent_1_1) {
                productComponent_1 = productComponent_1_1;
            },
            function (rateComponent_1_1) {
                rateComponent_1 = rateComponent_1_1;
            },
            function (inventryComponent_1_1) {
                inventryComponent_1 = inventryComponent_1_1;
            },
            function (categoryComponent_1_1) {
                categoryComponent_1 = categoryComponent_1_1;
            },
            function (apiComponent_1_1) {
                apiComponent_1 = apiComponent_1_1;
            },
            function (socketComponent_1_1) {
                socketComponent_1 = socketComponent_1_1;
            },
            function (formComponent_1_1) {
                formComponent_1 = formComponent_1_1;
            },
            function (sellingComponent_1_1) {
                sellingComponent_1 = sellingComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "start-app",
                        templateUrl: "./app/components/app/app.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        // { path : "/",  redirectTo : ["Home"] },
                        { path: "/home", name: "Home", component: homeComponent_1.HomeComponent, useAsDefault: true },
                        { path: "/category", name: "Category", component: categoryComponent_1.CategoryComponent },
                        { path: "/product", name: "Product", component: productComponent_1.ProductComponent },
                        { path: "/rate", name: "Rate", component: rateComponent_1.RateComponent },
                        { path: "/inventry", name: "Inventry", component: inventryComponent_1.inventryComponent },
                        { path: "/seller", name: "Seller", component: sellingComponent_1.SellingComponent },
                        { path: "/form", name: "Form", component: formComponent_1.FormComponent },
                        { path: "/testApi", name: "TestApi", component: apiComponent_1.ApiComponent },
                        { path: "/scoket", name: "Socket", component: socketComponent_1.SocketComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
