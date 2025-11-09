import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
declare var initHomeSlider: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize the home slider after the view is initialized
    if (typeof initHomeSlider === 'function') {
      setTimeout(() => {
        initHomeSlider();
      }, 100);
    }
  }

}