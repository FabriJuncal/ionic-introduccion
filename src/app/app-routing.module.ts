import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Rutas Redirección
  // En este objeto decimos que si el path/ruta es igual a vacio/''
  // Redireccine con la función "redirectTo" al path/ruta 'inicio
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  // LazyLoad(Carga Perezosa): Es un proceso que ayuda a que los componentes se carguen mas rapidos
  // Cuando vemos que un Route se carga con la función "loadChildren", quiere decir que utiliza "LazyLoad"
  // Para optimizar la carga del componente
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
