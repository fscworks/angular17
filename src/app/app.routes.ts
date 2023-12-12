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
    children: [
      {
        path: '',
        redirectTo: 'idle',
        pathMatch: 'full',
      },
      {
        path: 'idle',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-idle/defer-idle.component'
          ).then((c) => c.DeferIdleComponent),
      },
      {
        path: 'timer',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-timer/defer-timer.component'
          ).then((c) => c.DeferTimerComponent),
      },
      {
        path: 'interaction',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-interaction/defer-interaction.component'
          ).then((c) => c.DeferInteractionComponent),
      },
      {
        path: 'interaction-prefetched',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-interaction-prefetched/defer-interaction-prefetched.component'
          ).then((c) => c.DeferInteractionPrefetchedComponent),
      },
      {
        path: 'interaction-inputs',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-interaction-inputs/defer-interaction-inputs.component'
          ).then((c) => c.DeferInteractionInputsComponent),
      },
      {
        path: 'viewport',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-viewport/defer-viewport.component'
          ).then((c) => c.DeferViewportComponent),
      },
      {
        path: 'error',
        loadComponent: () =>
          import(
            './pages/defer-pg/childs/defer-error/defer-error.component'
          ).then((c) => c.DeferErrorComponent),
      },
    ],
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
