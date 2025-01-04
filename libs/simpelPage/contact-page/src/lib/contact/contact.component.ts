import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@simpel-page/footer-feature';
import { NavComponent } from '@simpel-page/nav-feature';

@Component({
  selector: 'lib-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [CommonModule, NavComponent, FooterComponent],
})
export class ContactComponent {}
