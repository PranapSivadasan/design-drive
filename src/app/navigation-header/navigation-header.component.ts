import { Component, OnInit, HostListener } from '@angular/core';
import { AppConstants } from '../constants/app-constants';
import { navigationData } from '../interfaces/app-interfaces';

@Component({
  selector: 'dd-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})

export class NavigationHeaderComponent implements OnInit {

  navigationData: navigationData[];
  scrolled: boolean;

  constructor(public appConst: AppConstants) {
    this.navigationData = [
      {
        displayName: 'home',
        hyperlink: '#home',
        isActive: true
      },
      {
        displayName: 'projects',
        hyperlink: '#project',
        isActive: false
      },
      {
        displayName: 'about',
        hyperlink: '#about',
        isActive: false
      },
      {
        displayName: 'contact',
        hyperlink: '#contact',
        isActive: false
      },
      {
        displayName: 'assets',
        hyperlink: '#assets',
        isActive: false
      }
    ];
    this.scrolled = false;
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  scrollListener(): void {
    this.scrolled = window.scrollY > 10;
  }

  setActiveLink(index: number) {
    this.navigationData.forEach((value, i) => {
      value.isActive = false;
      if (i === index) {
        value.isActive = true;
      }
    });
  }

}
