import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule, HAMMER_LOADER, Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { REMOVE_STYLES_ON_COMPONENT_DESTROY } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { VERSION } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EventManager } from '@angular/platform-browser';
import { EventManagerPlugin } from '@angular/platform-browser';
import { HammerGestureConfig } from '@angular/platform-browser';
import { HydrationFeatureKind } from '@angular/platform-browser';
import { ɵSharedStylesHost } from '@angular/platform-browser';
import { TransferState } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent}  from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import * as AOS from 'aos';


declare var bootstrap: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  CommonModule, HomeComponent, GalleryComponent, RouterModule, ErrorComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'gallery';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        
      delay: 0,
      easing: 'ease',
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navScroll'
      });
    }
  }
  links = [
    {path: '/app', label: 'Головна', active: 'button-active'},
    {path: '/error', label: '404', active: 'button-active'},
    {path: '/gallery', label: 'Форма', active: 'button-active'}
  ];
}