import { Component, OnInit, inject } from '@angular/core';
import { Api } from '../../../service/api';

@Component({
  selector: 'app-pagina-2',
  imports: [],
  templateUrl: './pagina-2.html',
  styleUrl: './pagina-2.css'
})
export class Pagina2 implements OnInit {
  private cocktailService = inject(Api)
  cocktails!: any[];

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((res:any) => {
      this.cocktails = res.drinks;
      console.log(this.cocktails)
    });
  }
}
