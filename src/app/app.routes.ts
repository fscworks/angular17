import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'for-syntax',
  },
  {
    path: 'for-syntax',
    loadComponent: () =>
      import('./pages/for-pg/for-pg.component').then((c) => c.ForPgComponent),
  },
  {
    path: 'if-syntax',
    loadComponent: () =>
      import('./pages/if-pg/if-pg.component').then((c) => c.IfPgComponent),
  },
  {
    path: 'defer-syntax',
    loadComponent: () =>
      import('./pages/defer-pg/defer-pg.component').then(
        (c) => c.DeferPgComponent,
      ),
  },
  {
    path: 'switch-syntax',
    loadComponent: () =>
      import('./pages/switch-pg/switch-pg.component').then(
        (c) => c.SwitchPgComponent,
      ),
  },
  {
    path: 'standalone-pipes',
    loadComponent: () =>
      import('./pages/standalone-pipe/standalone-pipe.component').then(
        (c) => c.StandalonePipeComponent,
      ),
  },
  {
    path: 'signals-syntax',
    loadComponent: () =>
      import('./pages/signals-pg/signals-pg.component').then(
        (c) => c.SignalsPgComponent,
      ),
  },
];
