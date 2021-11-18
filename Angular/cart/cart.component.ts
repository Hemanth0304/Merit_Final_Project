import { Component, OnInit } from '@angular/core';
import { Add2cartService } from '../Service/add2cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public pr: any;
  public grandtotal: any;
  public product :any =[];
  billDetails :any; //product details which are to be sent to db is stored in this
  submitted = false;
  public tr :any; 

 
  constructor(private formBuilder: FormBuilder,private CartService:Add2cartService) { }

  ngOnInit(): void {

    console.log("CPU",this.product.cpu)

    this.CartService.getProducts().subscribe(res=>{
      this.product = res;
      this.pr = this.CartService.getPrice();
      console.log("Price is ", this.pr);
      this.tr = Number(this.pr)+Number(this.pr);


      this.billDetails = this.formBuilder.group({
        ProductName:[this.pr],
        productTotal:[this.tr],
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        
        



      });
    })

  }
   

  reload(){
    // any other execution
    this.ngOnInit()
    }

    onReset() {
      this.submitted = false;
      this.billDetails.reset();
    }

    get f() {
      return this.billDetails.controls;
    }
  


    onSubmit()
    {
      this.submitted = true;
         if (this.billDetails.invalid){
          alert("Product not Purchased")
           return;
          }
this.CartService.addpro(this.billDetails.value).subscribe((data)=>{});
alert("Product Purchased")

this.pr= Number(this.pr) + Number( this.pr);
}
}
