import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-dialogdelComponent
import { dialogdelComponent } from '../components/dialogdelComponent/dialogdel.component';
//CORE_REFERENCE_IMPORT-dialogComponent
import { dialogComponent } from '../components/dialogComponent/dialog.component';
//CORE_REFERENCE_IMPORT-addmemberComponent
import { addmemberComponent } from '../components/addmemberComponent/addmember.component';
//CORE_REFERENCE_IMPORT-signupComponent
import { signupComponent } from '../components/signupComponent/signup.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogdelComponent
dialogdelComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogComponent
dialogComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addmemberComponent
addmemberComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-signupComponent
signupComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'login', component: loginComponent},{path: 'home', component: homeComponent,
children: [{path: 'addmember', component: addmemberComponent}]},{path: 'addmember', component: addmemberComponent,
children: [{path: 'addmember', component: addmemberComponent}]},{path: 'dialog', component: dialogComponent},{path: 'dialogdel', component: dialogdelComponent},{path: '', redirectTo: '/login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
