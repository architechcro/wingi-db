// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC7s2rT2-e8VQY1ak6ndcT7y_L_PSwX11o',
    authDomain: 'ads-galore.firebaseapp.com',
    databaseURL: 'https://ads-galore.firebaseio.com',
    projectId: 'ads-galore',
    storageBucket: 'ads-galore.appspot.com',
    messagingSenderId: '376493202472'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
