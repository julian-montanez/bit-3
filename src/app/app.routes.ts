import { Routes } from '@angular/router';
import { Inicio } from './paginas/componentes/inicio/inicio';
import { PaginaNoEncontrada } from './paginas/componentes/pagina-no-encontrada/pagina-no-encontrada';
import { Pagina2 } from './paginas/componentes/pagina-2/pagina-2';

export const routes: Routes = [
    {
        path: "inicio",
        component: Inicio,
        title: "inicio | bit-3"
    },
    {
        path: "pagina-2",
        component: Pagina2,
        title: "inicio | bit-3"
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
