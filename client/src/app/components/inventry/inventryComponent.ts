import { Component } from "angular2/core" ;
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)

@Component({
    selector : 'home',
    templateUrl :  "./app/components/inventry/inventry.html"
})
export class inventryComponent{
    add : {}
    getCategory
    getProducts;
    getUsers;
    getRates ;
    getInventry
    constructor(public http: Http) {
    this.add = {
        categoryName: "",
        productName : "",
        userName: "",
        rate : "",
        unit : ""
    }
    
      this.http.get('/api/getCategory')
            .subscribe((res: Response) => {
               this.getCategory = res.json().data
            }) 
    
         this.http.get('/api/getProducts')
            .subscribe((res: Response) => {
               this.getProducts = res.json().data
            }) 
            
             this.http.get('/api/user/getUser')
            .subscribe((res: Response) => {
               this.getUsers = res.json().data
            }) 
            
              this.http.get('/api/rate/getRate')
            .subscribe((res: Response) => {
               this.getRates = res.json().data
            }) 
            
                  this.http.get('/api/inven/getInventry')
            .subscribe((res: Response) => {
               this.getInventry = res.json().data
               console.log(res.json().data)
            }) 
        }
        
        
        
                send(add): void {
                    console.log(add)
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options: RequestOptions = new RequestOptions();
		options.headers = headers;
      
		this.http.post('/api/inven/Inventry' ,JSON.stringify(add), options)
        
			.subscribe((res: Response) => {
                console.log("Craete Inventry: ",res)
		
            });
            
           ;	//http.post
        
	} 




}