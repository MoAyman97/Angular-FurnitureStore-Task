import { Component } from '@angular/core';
import { ProductInfo } from 'src/app/Models/product-info';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss']
})
export class ProductParentComponent {
  listFilter:number=0;
  priceFilter:number=0;
  cart:ProductInfo[]= [];
  totalprice:number=0;
  counter=1;
  cartFun(newProduct:ProductInfo){
    newProduct.counter=this.counter;
    newProduct.totalprice=this.totalprice;
    
    const exist=this.cart.find((product)=>product.id==newProduct.id)
   
    if (exist) {
      
      this.counter+=1
      newProduct.counter=this.counter;
      newProduct.totalprice=newProduct.price*newProduct.counter;
    }
      else{

        this.counter=1;
        newProduct.counter=this.counter;
        newProduct.totalprice=newProduct.price;
        this.cart.push(newProduct);
      }
    
    console.log(this.cart);
  }

}
