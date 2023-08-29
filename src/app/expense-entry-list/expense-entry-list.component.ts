import { Component } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css'],
})
export class ExpenseEntryListComponent {
  title: string;
  expenseEntries: ExpenseEntry[];
  constructor() {
    this.title = 'Expense Entry List';
    this.expenseEntries = this.getExpenseEntries();
  }
  ngOnInit() {}
  getExpenseEntries(): ExpenseEntry[] {
    let mockExpenseEntries: ExpenseEntry[] = [
      {
        id: 1,
        item: 'Pizza',
        amount: Math.floor(Math.random() * 10 + 1),
        category: 'Food',
        location: 'Mcdonald',
        spendOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
        createdOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
      },
      {
        id: 1,
        item: 'Pizza',
        amount: Math.floor(Math.random() * 10 + 1),
        category: 'Food',
        location: 'KFC',
        spendOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
        createdOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
      },
      {
        id: 1,
        item: 'Pizza',
        amount: Math.floor(Math.random() * 10 + 1),
        category: 'Food',
        location: 'Mcdonald',
        spendOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
        createdOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
      },
      {
        id: 1,
        item: 'Pizza',
        amount: Math.floor(Math.random() * 10 + 1),
        category: 'Food',
        location: 'KFC',
        spendOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
        createdOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
      },
      {
        id: 1,
        item: 'Pizza',
        amount: Math.floor(Math.random() * 10 + 1),
        category: 'Food',
        location: 'KFC',
        spendOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
        createdOn: new Date(
          2020,
          4,
          Math.floor(Math.random() * 30 + 1),
          10,
          10,
          10
        ),
      },
    ];
    return mockExpenseEntries;
  }
}
