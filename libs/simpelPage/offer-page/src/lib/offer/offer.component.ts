import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@simpel-page/nav-feature';
import { FooterComponent } from '@simpel-page/footer-feature';

@Component({
  selector: 'lib-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
  imports: [CommonModule, NavComponent, FooterComponent],
  
})
export class OfferComponent {}
