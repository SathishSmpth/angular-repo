import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/interface/accounts.interface';
import { AccountService } from 'src/app/services/accounts.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: Account;
  @Input() id!: number;

  constructor(private accountsService: AccountService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusChanged.emit(status);
  }
}
