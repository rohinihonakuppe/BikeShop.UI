import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      
      {
        path: 'my-favourites',
        loadChildren: () =>
          import('./pages/my-favourites/my-favourites.module').then((m) => m.MyFavouritesModule),
      },
      {
        path: 'bike',
        loadChildren: () =>
          import('./pages/bike-details/view-details/view-details.module').then((m) => m.ViewDetailsModule),
      },
        {
        path: 'add-bike',
        loadChildren: () =>
          import('./pages/add-bike/add-new-bike/add-new-bike.module').then((m) => m.AddNewBikeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
