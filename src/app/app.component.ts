import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
    this.scrollHorizontally();
  }

  scrollHorizontally() {
    const scrollContainer = document.getElementById('scrollhoriz');
    scrollContainer?.addEventListener('wheel', (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY || event.deltaX;
    });
  }

}
