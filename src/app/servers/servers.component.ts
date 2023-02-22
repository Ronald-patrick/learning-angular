import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer : boolean = false;
  serverCreationStatus : string = 'No server was created!'
  serverName = ''
  serverCreated = false;
  servers = ['Mumbai Server','Pune Server'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },1500);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(e : Event){
    this.serverName = (<HTMLInputElement> e.target).value
  }

}
