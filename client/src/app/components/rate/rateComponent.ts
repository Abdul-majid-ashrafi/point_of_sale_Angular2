import { Component } from "angular2/core" ;
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)

@Component({
    selector : 'home',
    templateUrl :  "./app/components/rate/rate.html"
})
export class RateComponent{
    rate : {} 
    getData; 
    constructor(public http: Http) {
        this.rate = {
            rates : "",
            rateDec: ""
        }
         this.http.get('/api/rate/getRate')
            .subscribe((res: Response) => {
               this.getData = res.json().data
               console.log(res.json().data)			
            }) 
        }


             send(rate): void {
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options: RequestOptions = new RequestOptions();
		options.headers = headers;
      
		this.http.post('/api/rate/Rate' ,JSON.stringify(rate), options)
        
			.subscribe((res: Response) => {
                console.log(res)
		
            });
            
           ;	//http.post
        
	} 	
// }

}