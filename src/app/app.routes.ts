import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BootstrapTestComponent } from './components/bootstrap-test/bootstrap-test.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'artists', component: ArtistsComponent },
    { path: 'bootstrap-test', component: BootstrapTestComponent },
    { path: '**', redirectTo: 'home' }
];