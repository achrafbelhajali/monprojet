import { Component } from '@angular/core';

@Component({
    selector: 'my-app-first',
    templateUrl: `./first.component.html`
  })

  export class FirstComponent  { 
    alignement:string = 'right';
    couleur:string = 'grey';
    imagePath:string='image1.jpg';

   }
  
 