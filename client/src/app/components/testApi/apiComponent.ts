import { Component } from "angular2/core";
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)

@Component({
    selector: 'test-api',
    template: '<h1> Api </h1> <div> <pre> {{receivedFromServer | json}} </pre> </div>',
})
export class ApiComponent {
    receivedFromServer: any

    constructor(private http: Http) {
        //constructor
        
        //calling test api (testing)
        this.testApi();
    }

    testApi(): void {
        this.http.request('http://localhost:4000/api/test')
            .subscribe((res: Response) => {
                this.receivedFromServer = res.json();
            }); //http.request 
    }


}