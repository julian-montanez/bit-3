import { Component, OnInit, inject } from '@angular/core';
import { Api } from '../../../service/api';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../interfaces/product'; 
import { CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-info',
  imports: [CurrencyPipe],
  templateUrl: './producto-info.html',
  styleUrl: './producto-info.css'
})
export class ProductoInfo implements OnInit {
  
  private apiproduct = inject(Api);
  private route = inject(ActivatedRoute);
  logoML = "assets/logo/logo-ML.png"
  product!: IProduct;

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.apiproduct.getproductsInfoId(Number(params["id"])).subscribe((data: any)=>{ 
        const {title, price, description, category, image, rating} = data;
        this.product = {title, price, description, category, image, rate:rating.rate, count:rating.count}
        console.log(this.product);
      });
    });
  }

  constructor(private location: Location){}

  atras(){
    console.log("atras");
    this.location.back();
  }
}
