import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => 
      loadRemoteModule('task-list-mfe', './Component').then(m => m.App)
  },
  {
    path: 'add',
    loadComponent: () => 
      loadRemoteModule('task-form-mfe', './Component').then(m => m.App)
  },
  { 
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full' 
}
];