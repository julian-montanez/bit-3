import { Component, OnInit, inject } from '@angular/core';
import { Api } from '../../../service/api';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-pagina-producto',
  imports: [RouterLink, ],
  templateUrl: './pagina-producto.html',
  styleUrl: './pagina-producto.css'
})
export class PaginaProducto implements OnInit {
  private cocktailService = inject(Api)
  cocktails!: any[];
  letras: string[] = [];
  letra: string = "";

  enviar(valor: string) {
    console.log(valor);
    this.letra = valor;
  }

  ngOnInit(): void {
    this.cocktailService.getproducts().subscribe((res:any) => {
      this.cocktails = res;
      console.log(this.cocktails)
    });
  }
}
