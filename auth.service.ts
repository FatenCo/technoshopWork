import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  // Méthode pour mettre à jour l'état de connexion lorsque l'utilisateur se connecte
  login() {
    this.loggedIn.next(true);
  }

  // Méthode pour mettre à jour l'état de connexion lorsque l'utilisateur se déconnecte
  logout() {
    this.loggedIn.next(false);
  }

  // Méthode pour obtenir l'état de connexion actuel (observable)
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
