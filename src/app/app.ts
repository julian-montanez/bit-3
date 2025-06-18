import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegador } from './paginas/compartidos/navegador/navegador';
import { PieDePagina } from './paginas/compartidos/pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navegador, PieDePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bit-3';
}
