import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GalleryComponent, AppComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
