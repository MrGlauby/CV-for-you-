import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'landingPage',
    pathMatch: 'full',
  },

  {
    path: 'landingPage',loadComponent: () => import('@simpel-page/landing-page').then((m) => m.LandingPageComponent),
  },

  {
    path: 'offerPage', loadComponent: () => import ('@simpel-page/offer').then((m) => m.OfferComponent),
  },

  {
    path: 'blogPage', loadComponent:() => import ('@simpel-page/blog').then((m) => m.BlogComponent),
  },

  {
    path: 'impressum', loadComponent:() => import ('@simpel-page/impressum').then((m) => m.ImpressumComponent),
  },

  {
    path: 'contentPage', loadComponent:() => import ('@simpel-page/main-content').then((m) => m.MainContentComponent),
  },
  
  {
    path: 'newsletterPage', loadComponent:() => import ('@simpel-page/newsletter').then((m) => m.NewsletterComponent),
  },

  {
    path: 'datenschutzPage', loadComponent:() => import ('@simpel-page/datenschutz').then((m) => m.DatenschutzComponent),
  },



  {
    path: 'faqPage', loadComponent:() => import ('@simpel-page/faq').then((m) => m.FaqComponent),
  },

  {
    path: 'aboutPage', loadComponent:() => import ('@simpel-page/about').then((m) => m.AboutComponent),
  },

  {
    path: 'contactPage', loadComponent:() => import ('@simpel-page/contact').then((m) => m.ContactComponent),
  },

];
