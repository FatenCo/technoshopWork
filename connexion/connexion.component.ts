import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  handleSubmit() {
    // Ici, vous pouvez effectuer des vérifications supplémentaires avant de soumettre le formulaire.
    // Par exemple, valider le format de l'e-mail et le mot de passe.

    // Pour le test statique, utilisez simplement des valeurs statiques pour l'e-mail et le mot de passe
    const emailTest = 'technoShop@example.com';
    const passwordTest = 'technoshop123';

    if (this.email === emailTest && this.password === passwordTest) {
      // Authentification réussie, naviguer vers le dashboard du consommateur
      this.router.navigate(['/dashboardConsommateur']);

      // Mettre à jour l'état de connexion dans le service AuthService
      this.authService.login();
    } else {
      // Afficher un message d'erreur ou une notification d'échec de connexion
      console.log('Identifiants invalides');
    }
  }
}
