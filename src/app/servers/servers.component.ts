import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // by element
  //selector: '[app-servers]', // by attribute
  selector: '.app-servers', // by class

  templateUrl: './servers.component.html',
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>
  //`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'InitialTestServer';
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2'];


  constructor(){
  // () => {} is similiar to function() {}
    setTimeout(() => {
      this.allowNewServer = true;
    } ,4000)
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! and Name is ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
