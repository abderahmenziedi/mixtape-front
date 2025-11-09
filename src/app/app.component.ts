import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
declare var $: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'mixtape';

  ngAfterViewInit() {
    // Initialize header functions after view is fully rendered
    const win = window as any;
    if (typeof win.setHeader === 'function') {
      win.setHeader();
    }
  }
}