import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@simpel-page/nav-feature';
import { FooterComponent } from '@simpel-page/footer-feature';

@Component({
  selector: 'lib-about',
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
