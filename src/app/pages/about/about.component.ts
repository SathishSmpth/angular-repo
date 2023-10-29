import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interface/accounts.interface';
import { AccountService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  accounts: Account[] = [];
  constructor(private accountsService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
