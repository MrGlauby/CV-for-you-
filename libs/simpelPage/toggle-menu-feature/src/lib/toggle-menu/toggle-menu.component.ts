import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'toggle-menu',
  imports: [CommonModule],
  templateUrl: './toggle-menu.component.html',
  styleUrl: './toggle-menu.component.css',
})
export class ToggleMenuComponent {


  public faqs = [
    {
      question: 'Ipsum dolor sit?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe',
      isOpen: false
    },
    {
      question: 'Eatae? Nobis, natus voluptas! faso dolor dasas sit?',
      answer: 'impedit doloremque provident odio possimus quam doloribus ratione et nobis hic',
      isOpen: false
    },
    {
      question: 'Natus  Nobis, natus voluptas!faso dolor dasas sit?',
      answer: 'impedit doloremque provident odio possimus quam doloribus ratione et nobis hic',
      isOpen: false
    },
    {
      question: 'Ipsum faso dolor dasas sit?',
      answer: 'impedit doloremque provident odio possimus quam doloribus ratione et nobis hic',
      isOpen: false
    },
    {
      question: 'Dolor ipsum dolor sit?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe',
      isOpen: false
    },
    {
      question: 'Lortem ipsqum dowlor site?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe',
      isOpen: false
    },
    {
      question: ' Amet ipsum dolor sit?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum saepe',
      isOpen: false
    },
  
  ];

  public toggleAnswer(faq: any) {
    faq.isOpen = !faq.isOpen;
  }
}



