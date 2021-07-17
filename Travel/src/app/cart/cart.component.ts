
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
// import { clear } from 'console';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total : number = 0;
  percenti : number = 0;
  percentShow: string = "";
  cartLength: number = 0;
  items: any;
  checkoutForm: any;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {  this.checkoutForm = this.formBuilder.group({

     name: '',
     address: ''

   });
   }

ngOnInit(): void {
  this.items = this.cartService.getItems();
  this.cartLength = this.items.length;
  console.log(this.cartLength);

  var a : number = 0;
  for (let val of this.items) {
      a += val.price ;
  }
  this.total = a;

  if (this.total > 3000 &&  this.total < 5000 ){
    this.percenti = this.total*0.9
    this.percentShow = " - 10%";
  }
  else if(this.total > 5000){
    this.percenti = this.total*0.8
    this.percentShow = " - 20%";
  }
  else{
    this.percentShow = "";
  }
  
}
onSubmit(customerData: any) {
    if(this.items.length === 0 ){
      alert("Your cart is empty!");
    }

    else if(customerData.name === ""){
      alert("Please fill out your name!");
    }

    else if(customerData.address === ""){
      alert("Please fill out your adress!");
    }

    else if (this.items.length > 0 ){
    console.warn('Your order has been submitted', customerData);
    alert("Thank you for your purchase!");
    this.checkoutForm.reset();
    this.reset()
    // this.checkoutForm.alert();
    }
  }

  onClick(){
    this.reset();
  }

  reset(){
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.percenti = 0;
    this. percentShow = "";
    this.cartLength = 0;
  }
}
