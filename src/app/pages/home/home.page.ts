import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonLabel, IonItem, IonList, IonImg } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Restaurant } from '../../models/restaurant.model';

// KATA · Dimecres 25/11 (consulta la fitxa de la sessió)
//
// 1. Injecta el MenuService i guarda els restaurants en una propietat (restaurants).
// 2. Mostra'ls a la plantilla amb @for dins d'una ion-list
//    (name, cuisine, rating, deliveryTime i deliveryFee).
// 3. Mostra quants restaurants hi ha: «6 restaurants».
// 4. Afig una ion-searchbar amb [(ngModel)]="searchTerm" que filtre per nom o per cuina.
//    Recorda: [(ngModel)] necessita FormsModule als imports del component.
// 5. Si cap restaurant coincideix, mostra un missatge amb @if / @else.
//
// No toques el MenuService: la pàgina només el fa servir.

@Component({
  selector: 'app-home',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel,IonItem,IonList, IonImg],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
    constructor(private menuService: MenuService) {}

    

    restaurants: Restaurant[] = []
    ngOnInit() {
      this.load_restaurants();
    }

    load_restaurants() {
      this.restaurants = this.menuService.getRestaurants();
    }

    
    


}
