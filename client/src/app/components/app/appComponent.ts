import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

// import { Menu } from "./../menu/menu";
import { HomeComponent } from "./../home/homeComponent";
import { ProductComponent } from "./../product/productComponent";
import { RateComponent } from "./../rate/rateComponent";
import { inventryComponent } from "./../inventry/inventryComponent";
import { CategoryComponent } from "./../category/categoryComponent";
import { ApiComponent } from "./../testApi/apiComponent";
import { SocketComponent } from "./../socket/socketComponent";
import { FormComponent } from "./../form/formComponent";
import {SellingComponent} from "./../selling/sellingComponent"

@Component({
    selector: "start-app",
    templateUrl: "./app/components/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    // { path : "/",  redirectTo : ["Home"] },
    { path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/category", name: "Category", component: CategoryComponent },
    { path: "/product", name: "Product", component: ProductComponent },
    { path: "/rate", name: "Rate", component: RateComponent },
    { path: "/inventry", name: "Inventry", component: inventryComponent },
    {path : "/seller" , name : "Seller", component: SellingComponent},
    { path: "/form", name: "Form", component: FormComponent },
    { path: "/testApi", name: "TestApi", component: ApiComponent },
    { path: "/scoket", name: "Socket", component: SocketComponent }
])
export class AppComponent {

    constructor() {

    }

}