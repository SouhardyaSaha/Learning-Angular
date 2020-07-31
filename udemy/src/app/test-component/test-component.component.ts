import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  alloweAddServer = false
  serverName = 'predefinded Name'
  servers = [
    'testServer 1', 'testserve 2'
  ]

  constructor() {
    setTimeout(() => {
      this.alloweAddServer = true
    }, 2000);
  }

  onUpdateStatus(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onAddServer() {
    this.servers.push(this.serverName)
  }

  ngOnInit(): void {
  }

  // assignment 1
  // username = ''
  // isUsernameEmpty = true

  // checkUserName () {
  //   if(this.username.length > 0) this.isUsernameEmpty = false
  //   else this.isUsernameEmpty = true
  // }

  // resetUsername () {
  //   this.username = ''
  // }

  // assignment 2
  // logs = []
  // showDetails = true
  // toggleDisplayDetails () {
  //   this.showDetails = !this.showDetails
  //   this.logs.push(new Date())
  // }
}
