import { Routes } from '@angular/router';
import { Inicio } from './paginas/componentes/inicio/inicio';
import { PaginaNoEncontrada } from './paginas/componentes/pagina-no-encontrada/pagina-no-encontrada';
import { PaginaProducto } from './paginas/componentes/pagina-producto/pagina-producto';
import { productoInfo } from './paginas/componentes/producto-info/producto-info';

export const routes: Routes = [
    {
        path: "inicio",
        component: Inicio,
        title: "inicio | bit-3"
    },
    {
        path: "pagina-producto",
        component: PaginaProducto,
        title: "pagina-2 | bit-3"
    },
    {
        path: "pagina-bebida/:id/:name",
        component: productoInfo,
        title: "bebida | bit-3"
    },
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
        {
        path: "**",
        component: PaginaNoEncontrada,
        title: "error | non-found"
    }
];
