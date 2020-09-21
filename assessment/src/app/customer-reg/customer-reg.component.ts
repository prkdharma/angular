import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent {

  constructor() { }
  
  customer:Customer=undefined;
  
  addCustomer(form:any){
    let data=form.value;
   let name=data.customerName;
    let balance=data.balance;
    this.customer=new Customer(name,balance);
    console.log("user initialized="+this.customer.balance);
  }
}
