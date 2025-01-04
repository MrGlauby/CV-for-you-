import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@simpel-page/nav-feature';
import { FooterComponent } from '@simpel-page/footer-feature';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  imports: [CommonModule, NavComponent, FooterComponent],
  
})
export class MainContentComponent {}
