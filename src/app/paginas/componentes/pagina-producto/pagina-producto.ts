import { Component, OnInit, inject } from '@angular/core';
import { Api } from '../../../service/api';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-pagina-producto',
  imports: [RouterLink, NgForOf],
  templateUrl: './pagina-producto.html',
  styleUrl: './pagina-producto.css'
})
export class PaginaProducto implements OnInit {
  private productService = inject(Api)
  products!: any[];
  letras: string[] = [];
  letra: string = "";
  men = document.getElementById("#producto14")

  enviar(valor: string) {
    console.log(valor);
    this.letra = valor;
  }

  ngOnInit(): void {
    this.productService.getproducts().subscribe((res:any) => {
      this.products = res;
      console.log(this.products)
    });
  }

  categorias: string[] = ["todo", "men's clothing", "jewelery", "electronics", "women's clothing"]
  categoriaSeleccionada: string = "todo";
  
  get productoFiltrado() {
    if(this.categoriaSeleccionada === "todo") {
      return this.products;
    }
    return this.products.filter(producto => producto.category === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string){
    this.categoriaSeleccionada = categoria;
  }
}