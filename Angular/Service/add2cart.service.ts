import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Add2cartService {

  public cartitemList : any =[]
  public productList = new  BehaviorSubject <any>([]);
  constructor(private http : HttpClient) { }


  getProducts(){
   return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartitemList.push(...product);
    this. productList.next(product);


  }

  addtoCart(product:any){
    this.cartitemList.push(product);
    this.productList.next(this.cartitemList);
    console.log(this.cartitemList)
    
  }

  getPrice(): number{
    let pr = 0
    this.cartitemList.map((a: any) => {
   
      pr = a.price;
    });
    
    return pr;
  }

  addpro(productdetail:any) {
    return this.http.post('http://localhost:7050/payment', productdetail);
  }
  
}
