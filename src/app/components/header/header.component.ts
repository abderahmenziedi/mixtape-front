import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize menu after view is fully rendered
    this.initMenu();
  }

  initMenu() {
    if($('.menu').length) {
      var hamb = $('.hamburger');
      var menu = $('.menu');
      var menuOverlay = $('.menu_overlay');

      hamb.on('click', () => {
        menu.addClass('active');
      });

      menuOverlay.on('click', () => {
        menu.removeClass('active');
      });
    }
  }
}