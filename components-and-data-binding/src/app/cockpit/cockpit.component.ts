import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // A alternative approch of two way data binding (ngModel) -> local references -> getting the whole input element
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    })

  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    })

  }

}
