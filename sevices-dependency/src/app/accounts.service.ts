import { Injectable, EventEmitter } from '@angular/core'
import { LoggingService } from './logging.service'

@Injectable()
export class AccountsService {

  accounts: { name: string, status: string }[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ]

  statusUpdated = new EventEmitter<string>()

  constructor(private loggingService: LoggingService) { }

  addAccount(account: { name: string, status: string }) {
    this.accounts.push(account)
    this.loggingService.logStatusChange(account.status)
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status)
  }
}
