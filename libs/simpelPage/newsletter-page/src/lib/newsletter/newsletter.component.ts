import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@simpel-page/footer-feature';
import { NavComponent } from '@simpel-page/nav-feature';

@Component({
  selector: 'lib-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
  imports: [CommonModule, NavComponent, FooterComponent],
})
export class NewsletterComponent {}
