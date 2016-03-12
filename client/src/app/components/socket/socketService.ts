import {Injectable} from 'angular2/core';

declare var io: any;

@Injectable()
export class SocketService {
	
	socket: any;
	host: string;
	fruits: [string] = ['Pineapple'];

	constructor () {
		
        this.host = window.location.origin;
		console.log("WEBSOCKET connecting to", this.host);
        
        this.socket = io();
        
        //getting all last record from server if restored or default array
        this.get();
		
        //listing if add fruit on server then server emits the fruit name
        this.socket.on("addedFruit", (data) => {
			this.fruits.push(data);
            console.log('addedFruit this.fruits', this.fruits);
		});
	}


	add(fruitName): void {
        this.socket.emit('addFruit', fruitName);
    }
    
    getAllFruits() {
        return this.fruits;
    }

	get(): void {
        
        //catching from sever when it emits  (all fruits)..
        this.socket.on('getAllFruits', (data)=>{
            ///this.fruits = data;
            console.log('getAllFruits: ', data);
        });

        //sending request to fire all fruits from server and catching from server events (getAllFruits)
        this.socket.emit('getFruits', null);
    }


}







// let host = window.location.origin;
// console.log("WEBSOCKET connecting to", host);