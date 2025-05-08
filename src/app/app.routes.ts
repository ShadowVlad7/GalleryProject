import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent}  from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "main"},
    {path: "main", component: HomeComponent},
    {path: "404", component: ErrorComponent},
    {path: "form", component: GalleryComponent}
];
