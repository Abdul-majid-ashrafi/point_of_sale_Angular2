import { Component } from "angular2/core";
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)


@Component({
    selector: 'selling',
    templateUrl: "./app/components/selling/selling.html"
})
export class SellingComponent {
    sell: {}
    getSellings;
    getInventry;
    selectRate;
    
    constructor(public http: Http) {
        this.sell = {
            productName: "",
            unit: ""}

     
        this.http.get('api/sell/getSellers')           /// get Sellers...
            .subscribe((res: Response) => {
                this.getSellings = res.json().data
                console.log(res.json().data)
            })

        this.http.get('/api/inven/getInventry')
            .subscribe((res: Response) => {
                this.getInventry = res.json().data
            })
 
    }






    onChange(deviceValue) {
        this.http.get('/api/inven/getInventry')
            .subscribe((res: Response) => {
                res.json().data.forEach(data => {
                    if (data.productName === deviceValue) {
                        this.selectRate = data.unit
                    }
                    else {
                        console.log("ELSE......")
                    }
                });
            })
           
    }


    send(sell): void {
        // console.log(sell.unit)
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options: RequestOptions = new RequestOptions();
        options.headers = headers;
 
 let corrent = sell.unit
let total =  this.selectRate
let now =  total - corrent

 console.log("Corrent ",corrent)
  console.log("Total ", total)
  console.log( "Now ", now)

     this.http.get('/api/inven/getInventry')
            .subscribe((res: Response) => {
                res.json().data.forEach(data => {
                    // console.log("Subscribe ", data.unit)
                    // if (data.productName === this.m) {
                        // this.selectRate = data.unit
                        // console.log("TM", this.selectRate)
                    // }
                    // else {
                        // console.log("ELSE.fdffdffdfdfd.....")
                    // }
                });
                
            })

        // this.http.post('/api/sell/Selling', JSON.stringify(sell), options)
            // .subscribe((res: Response) => {
                // console.log("Craete Seller: ", res)
            // });
    }
}