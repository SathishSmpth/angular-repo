import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from 'src/app/interface/accounts.interface';
import { AccountService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor(private accountsService: AccountService) {
    this.accountsService.statusChanged.subscribe((status: string) => {
      return alert('New status: ' + status);
    });
  }

  newAccount!: FormGroup;

  ngOnInit() {
    this.newAccount = new FormGroup({
      name: new FormControl(''),
      status: new FormControl('active'),
    });
  }

  onCreate() {
    this.accountsService.addAccount(this.newAccount.value);
  }
}
