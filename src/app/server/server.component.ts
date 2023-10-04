import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';
    serverLocation: string = 'London';

    constructor(){
        console.log("MATH ["+Math.random()+"]")
        this.serverStatus = Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE';
    }

    getServerLocation(){
        return this.serverLocation;
    }

    getColour(){
        console.log("Checking Status" +this.serverStatus);
        return this.serverStatus === 'ONLINE' ? 'green' : "red";
    }
}
