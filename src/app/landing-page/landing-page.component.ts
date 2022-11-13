import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dd-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
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
