import { Component, OnInit, inject } from '@angular/core';
import { Api } from '../../../service/api';
import { ActivatedRoute } from '@angular/router';
import { Drinks } from '../../../intefaces/drinks';

@Component({
  selector: 'app-producto-info',
  imports: [],
  templateUrl: './producto-info.html',
  styleUrl: './producto-info.css'
})
export class productoInfo implements OnInit {
  
  private apiDrink = inject(Api);
  private route = inject(ActivatedRoute);
  drink!: Drinks;

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.apiDrink.getproductsInfoId(Number(params["id"])).subscribe((data: any)=>{
        console.log(data);
      })
    })
  }
}
