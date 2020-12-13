import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';


export const authConfig: AuthConfig = {
issuer : 'https://dev-2020798.okta.com/oauth2/default',
redirectUri : window.location.origin,
  clientId: '0oa28eoynEoxB5RGG5d6'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'bluemoon-angular';
  // constructor(router: Router) {}
  constructor(private oauthService: OAuthService){
  this.oauthService.configure(authConfig);
  this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

// tslint:disable-next-line:typedef
login() {
  this.oauthService.initImplicitFlow();
}
// tslint:disable-next-line:typedef
logout() {
  this.oauthService.logOut();
}
// tslint:disable-next-line:typedef
get getUserName() {
  const claims = this.oauthService.getIdentityClaims();
  if (!claims) {
    return null;
  }
  return claims['name'];
}
}



