import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private accountsService : AccountsService) { }
  // constructor(private loggingService: LoggingService, private accountsService : AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    this.accountsService.statusUpdated.emit(status)
    // console.log(status);

    // this.loggingService.logStatusChange(status)
  }
}
