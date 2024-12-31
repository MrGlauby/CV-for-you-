import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'landingPage',
    pathMatch: 'full',
  },

  {
    path: 'landingPage',
    loadComponent: () =>
      import('@simpel-page/landing-page').then((m) => m.LandingPageComponent),
  },

  // {
  //     path: 'landing-page/:id', loadComponent: () => import ()
  // }
];
