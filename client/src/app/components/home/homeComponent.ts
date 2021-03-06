import { Component } from "angular2/core" ;
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)

@Component({
    selector : 'home',
    templateUrl :  "./app/components/home/home.html"
})
export class HomeComponent{
    user : {} 
    getData; 
    constructor(public http: Http) {
        this.user = {
            fName : "",
            lName: "",
            type : ""
        }
         this.http.get('/api/user/getUser')
            .subscribe((res: Response) => {
               this.getData = res.json().data
               console.log(res.json().data)			
            }) 
        }


             send(user): void {
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options: RequestOptions = new RequestOptions();
		options.headers = headers;
      
		this.http.post('/api/user/User' ,JSON.stringify(user), options)
        
			.subscribe((res: Response) => {
                console.log("Create User :",res)
		
            });
            
           ;	//http.post
        
	} 	
// }

}