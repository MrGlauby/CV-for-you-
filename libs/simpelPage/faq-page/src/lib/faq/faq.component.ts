import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@simpel-page/footer-feature';
import { NavComponent } from '@simpel-page/nav-feature';
import { ToggleMenuComponent } from '@simpel-page/toggle-menu';

@Component({
  selector: 'lib-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  imports: [CommonModule, NavComponent, ToggleMenuComponent, FooterComponent],
})
export class FaqComponent {}
