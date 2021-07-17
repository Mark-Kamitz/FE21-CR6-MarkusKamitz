
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : any = []

  constructor() { }

  addToCart(product: {destination: string, price:number, description:string, image:string, start:string, duration:string}) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

 clearCart() {
    this.items = [];
    return this.items;
  } 
}

