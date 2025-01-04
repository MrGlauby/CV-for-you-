import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@simpel-page/footer-feature';
import { NavComponent } from '@simpel-page/nav-feature';

@Component({
  selector: 'lib-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.css',
  imports: [CommonModule, NavComponent, FooterComponent],
})
export class DatenschutzComponent {}
