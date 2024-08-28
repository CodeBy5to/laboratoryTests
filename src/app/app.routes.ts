import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokemon-dashboard',
        loadComponent: () =>
          import('./UI/view-models/pokemon/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent)
      },
      { path: '', redirectTo: '/pokemon-dashboard', pathMatch: 'full' },
      {
        path: 'hash-generator',
        children: [
          {
            path: 'sha256-crypt',
            loadComponent: () =>
              import('./UI/view-models/hash-generator/hash-generator.component').then((m) => m.HashGeneratorComponent),
          },
          { path: '', redirectTo: '/hash-generator/sha256-crypt', pathMatch: 'full' },
        ],
      },
      

];
