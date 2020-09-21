import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor() { }

  customers:Customer[]=[
    new Customer("rama",9000),
    new Customer("krishna",9000),
    new Customer("teja",9000)
  ];
}
