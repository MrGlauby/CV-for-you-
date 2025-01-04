import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@simpel-page/footer-feature';
import { NavComponent } from '@simpel-page/nav-feature';

@Component({
  selector: 'lib-blog',
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {}
