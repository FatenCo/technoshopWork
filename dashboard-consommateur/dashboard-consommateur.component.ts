// dashboard-consommateur.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-consommateur',
  templateUrl: './dashboard-consommateur.component.html',
  styleUrls: ['./dashboard-consommateur.component.css']
})
export class DashboardConsommateurComponent {
  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  telephone: string = '';
  Email: string = '';
  motDePasse: string = '';

  constructor() {}

  handleUpdate() {
    if (window.confirm('Êtes-vous sûr de vouloir modifier votre compte ?')) {
      // Logique pour mettre à jour le compte ici
      console.log('Compte modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }

  handleDelete() {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte définitivement ?')) {
      // Logique pour supprimer le compte ici
      console.log('Compte supprimé avec succès !');
      // Rediriger vers la page d'accueil (remplacez 'accueil' par le chemin approprié)
      window.location.href = '/';
    } else {
      console.log('Suppression annulée.');
    }
  }
}
