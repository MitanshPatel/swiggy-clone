import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CategoryWiseRestaurantComponent } from './pages/category-wise-restaurant/category-wise-restaurant.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurant/:restaurant_name', component: MenuComponent},
    {path: 'category/:category_name', component: CategoryWiseRestaurantComponent},
    {path: 'favourites', component: FavouritesComponent}
];
