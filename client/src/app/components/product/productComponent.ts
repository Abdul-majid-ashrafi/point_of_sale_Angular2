import { Component } from "angular2/core" ;
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)


@Component({
    selector : 'about',
    templateUrl :  "./app/components/product/product.html"
})
export class ProductComponent{    
  product : {} 
    getProduct; 
    getCategory;
    constructor(public http: Http) {
        this.product = {
            productName : "",
            priductDec: "",
            categoryName : "",
            unit : ""
        }
        
         this.http.get('/api/getProducts')           /// get Products...
            .subscribe((res: Response) => {
               this.getProduct = res.json().data
               console.log(res.json().data)			
            }) 
        
        
        
         this.http.get('/api/getCategory')                /// GEt Category..
            .subscribe((res: Response) => {
               this.getCategory = res.json().data
               console.log(res.json().data)			
            }) 
        }


             send(product): void {
                 console.log(product)
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let options: RequestOptions = new RequestOptions();
		options.headers = headers;
      
		this.http.post('/api/Category' ,JSON.stringify(this.product), options)
        
			.subscribe((res: Response) => {
                console.log("Craete Products: ",res)
		
            });
            
           ;	//http.post
        
	} 	
// }
}