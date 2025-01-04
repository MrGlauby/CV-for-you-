import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'footer-feature',
  imports: [CommonModule, RouterLink,],
  templateUrl: './footer-feature.component.html',
  styleUrl: './footer-feature.component.css',
})
export class FooterComponent {}
