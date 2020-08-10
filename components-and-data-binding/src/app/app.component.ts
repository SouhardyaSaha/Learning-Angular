import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // serverElements = [{ name: 'Just A test', type: 'server', content: 'something' }];

  // onServerCreated(serverData: { serverName: string, serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintCreated(blueprintdata: { blueprintName: string, blueprintContent: string }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintdata.blueprintName,
  //     content: blueprintdata.blueprintContent
  //   });
  // }

  // Assignment Code

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onIncrementNumber(num: number) {
    if (num % 2 === 0) this.evenNumbers.push(num)
    else this.oddNumbers.push(num);
  }

}
