
//Builtin Methods
import { provide } from "angular2/core" ;
import { bootstrap } from "angular2/platform/browser" ;
import { HTTP_PROVIDERS } from "angular2/http";		// getting http compnent
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";  // with hash on url
import {FORM_PROVIDERS} from "angular2/common";         // getting form_providers for form validation (not required its work without importing also)
import { SocketService } from "./components/socket/socketService";

// Import Components
import {AppComponent} from "./components/app/appComponent";

// Bootstraping
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    FORM_PROVIDERS,
    SocketService,
    provide(LocationStrategy, { useClass: HashLocationStrategy }) // angular hashing urls
    	// form builder for form validations
]);