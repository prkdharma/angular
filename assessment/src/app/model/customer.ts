export class Customer{
    customerName:string;
    balance:number;
    

    constructor(customerName : string, balance:number){
      this.customerName=customerName;
      this.balance=balance;
      
    }
  
    getCustomerName():string{
      return this.customerName;
    }
  
    getBalance():number{
      return this.balance;
    }
  
   

  }
  