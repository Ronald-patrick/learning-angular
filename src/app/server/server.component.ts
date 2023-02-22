import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
        .status {
            color : white
        }
        .online {
            background-color : green
        }
        .offline {
            background-color : red
        }
    `]
})

export class ServerComponent {
    serverId : number = 10;
    serverStatus : string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}