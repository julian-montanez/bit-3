import { Routes } from '@angular/router';
import { Inicio } from './paginas/componentes/inicio/inicio';
import { PaginaNoEncontrada } from './paginas/componentes/pagina-no-encontrada/pagina-no-encontrada';
import { ProductoInfo } from './paginas/componentes/producto-info/producto-info';
import { PaginaProducto } from './paginas/componentes/pagina-producto/pagina-producto';


export const routes: Routes = [
    {
        path: "inicio",
        component: Inicio,
        title: "inicio | bit-3"
    },
    {
        path: "pagina-producto",
        component: PaginaProducto,
        title: "pagina-producto | bit-3"
    },
    {
        path: "producto-info/:id/:name",
        component: ProductoInfo,
        title: "producto-info | bit-3"
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
