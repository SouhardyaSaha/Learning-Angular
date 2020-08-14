import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { LoggingService } from "../logging.service";
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingSevice: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert(`The status was updated to ${status}`)
    )
  }

  ngOnInit () {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingSevice.logStatusChange(accountStatus)
    this.accountsService.addAccount({name: accountName, status: accountStatus})

  }
}
