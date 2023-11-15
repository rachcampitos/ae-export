import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  sliderImages = [
    '/assets/avocado-2.jpeg',
    '/assets/slider-image2.jpeg',
    '/assets/blueberry-2.jpeg',
  ];
}
