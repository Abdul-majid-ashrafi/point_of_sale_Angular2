
//Builtin Methods
import { provide } from "angular2/core" ;
import { bootstrap } from "angular2/platform/browser" ;
import { HTTP_PROVIDERS } from 'angular2/http';		//getting http compnent
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";  //with hash on url

//Import Components
import {AppComponent} from "./components/app/appComponent";

//Bootstraping
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,  
	provide(LocationStrategy, {useClass: HashLocationStrategy})	//angular hashing urls
]);