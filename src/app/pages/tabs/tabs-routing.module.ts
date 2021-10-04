import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

// En este array se definen las rutas a las cuales se va a acceder al ingresar al menú "Tabs"
const routes: Routes = [
  // Agregamos otro objeto del array
  // Donde se define que al ingresar a la URL "[DOMINIO]/tabs/"
  // Este redireccione a la página de "Contactos"
  // Si no se agregá este código, al ingresar a la ruta "[DOMINIO]/tabs/", la página estará en blanco
  {
    path: '',
    redirectTo: 'contact'
  },
  {
    path: '',
    component: TabsPage,
    children: [            // Este valor indica las rutas hijas que tendrá el menú "Tabs"
      {
        // path: Indica el nombre con el que se accederá a la ruta cargado en el campo "loadChildren"
        path: 'account',
        //loadChildren: importamos el modulo "AvatarPageModule" de la ruta "../avatar/avatar.module"
        // en la ruta no se debe definir la extensión ".ts"
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        // path: Indica el nombre con el que se accederá a la ruta cargado en el campo "loadChildren"
        path: 'contact',
        //loadChildren: importamos el modulo "ListPageModule" de la ruta "../list/list.module"
        // en la ruta no se debe definir la extensión ".ts"
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      },
      {
        // path: Indica el nombre con el que se accederá a la ruta cargado en el campo "loadChildren"
        path: 'settings',
        //loadChildren: importamos el modulo "ListPageModule" de la ruta "../list/list.module"
        // en la ruta no se debe definir la extensión ".ts"
        loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
