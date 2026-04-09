import { initFederation } from '@angular-architects/native-federation';

// Remove the 'assets/' prefix. 
// Based on your angular.json, this file is at the root.
initFederation('federation.manifest.json') 
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));