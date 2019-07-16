// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  redirect_uri: 'https://zohoapi.herokuapp.com/api/callback',
  client_id: '1000.2SV8QG8PWPUF411250087JST9M47SH',
  client_secret:  '6ae54361fb8301dc76149a010d997aded42c57a391',
  grant_type: 'authorization_code',
  api_url: 'https://zohoapi.herokuapp.com/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
