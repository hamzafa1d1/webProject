import { Injectable } from '@angular/core';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import {Location} from "@angular/common";
import {BehaviorSubject, Observable} from "rxjs";
import {FacebookUser} from 'src/app/model/facebookUser/facebook-user'
@Injectable({
  providedIn: 'root'
})
export class FacebookAccountService {
  private userSubject: BehaviorSubject<SocialUser|null>;
  public user$: Observable<SocialUser|null>;

constructor(private socialAuthService: SocialAuthService, private location: Location) {
  // @ts-ignore
  this.userSubject = new BehaviorSubject<SocialUser|null>(JSON.parse(localStorage.getItem('currentUser') ));
  this.user$ = this.userSubject.asObservable();
}

loginWithFacebook(): void {
  this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
    this.userSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.location.replaceState(this.location.path());
    window.location.reload();
  });
}

signOut(): void {
    localStorage.clear() ;
    window.location.reload()

}
 public getUser() : FacebookUser {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '');
  return new FacebookUser(
    currentUser.id ,
    currentUser.name,
    currentUser.email ,
    currentUser.photoUrl ,
    currentUser.firstName,
    currentUser.lastName,
    currentUser.authToken
  )

}
}
