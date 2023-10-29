import { EventEmitter, Injectable } from '@angular/core';
import { Account } from '../interface/accounts.interface';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  accounts: Account[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingService: LoggingService) {}
  
  statusChanged = new EventEmitter<string>();

  addAccount(newAccount: Account) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChanged(newAccount.status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChanged(status);
  }
}
