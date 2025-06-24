import { UpperCasePipe } from '@angular/common';
import { Component,} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navegador',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './navegador.html',
  styleUrl: './navegador.css'
})
export class Navegador {
  imagenI = "assets/logo/logo1.png"
}
