import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // PRODUCTS
  products: any[] = [
    {name: $localize`Shoes & Jeans`, description: $localize`Some good shoes and jeans for your summer vacations.`, img: 'assets/images/image1.png'},
    {name: $localize`3-quater Jeans`, description: $localize`Beach torn jeans for artistic lifestyle cool vibes with earth aura.`, img: 'assets/images/image2.png'},
    {name: $localize`Winter Wears`, description: $localize`Woollen wears for early winter days in Scotland.`, img: 'assets/images/image3.png'},
    {name: $localize`Nice Wears`, description: $localize`Nice wears for outdoor events with cool friends like Salim.`, img: 'assets/images/image4.png'},
  ];


  // SOME TEXTS
  siteText: string = $localize`Discover the latest trends in fashion at our online store. From stylish dresses to comfortable loungewear, we offer a wide range of clothing options for every occasion.`;

}
