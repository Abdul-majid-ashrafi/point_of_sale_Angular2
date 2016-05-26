import { Component } from "angular2/core" ;
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)

@Component({
    selector : 'home',
    templateUrl :  "./app/components/category/category.html"
})
export class CategoryComponent{
    user : {} 
    getData; 
    constructor(public http: Http) {
        this.user = {
            categoryName : "",
            categoryDec: ""
        }
         this.http.get('/api/getCategory')
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
      
		this.http.post('/api/Category' ,JSON.stringify(user), options)
        
			.subscribe((res: Response) => {
                console.log("Create Category : ",res)
		
            });
            
           ;	//http.post
        
	} 	
// }

}