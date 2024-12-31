import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@simpel-page/nav-feature';
import {FooterComponent} from '@simpel-page/footer-feature';
@Component({
  selector: 'lib-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [CommonModule, NavComponent, FooterComponent],
})
export class LandingPageComponent {}
