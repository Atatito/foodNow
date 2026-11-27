import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonLabel, IonItem, IonList, IonImg, IonSearchbar } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Restaurant } from '../../models/restaurant.model';
import { FormsModule } from '@angular/forms';

// KATA · Dimecres 25/11 (consulta la fitxa de la sessió)
// 4. Afig una ion-searchbar amb [(ngModel)]="searchTerm" que filtre per nom o per cuina.
//    Recorda: [(ngModel)] necessita FormsModule als imports del component.
// 5. Si cap restaurant coincideix, mostra un missatge amb @if / @else.
//
// No toques el MenuService: la pàgina només el fa servir.

@Component({
  selector: 'app-home',
  imports: [IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel,IonItem,IonList, IonImg,FormsModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
    constructor(private menuService: MenuService) {}

    
  searchTerm: string = '';
    OGrestaurants: Restaurant[] = []
    restaurants: Restaurant[] = []
    ngOnInit() {
      this.load_restaurants();
      this.restaurants=this.OGrestaurants;
    }

    load_restaurants() {
      this.OGrestaurants = this.menuService.getRestaurants();
      }


    search_restaurants() {
      this.restaurants = [];

      for (let restaurant of this.OGrestaurants) {
        if (restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          this.restaurants.push(restaurant);
        }
    }
  }

    
    


}
