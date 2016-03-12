import { Component } from "angular2/core";
import { SocketService } from "./socketService";


@Component({
    selector: "socket",
    templateUrl: "./app/components/socket/socket.html"
    //providers: [SocketService]
})
export class SocketComponent {
    socket: any;
    fruitz: Array<string>;

    // constructor    
    constructor(private io: SocketService) {
        this.fruitz = this.io.getAllFruits();
    }

    add(name) {
        if(name.trim().length > 2){
            this.io.add(name);
        }
    }

}