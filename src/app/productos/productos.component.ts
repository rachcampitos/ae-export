import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  screenWidth: number | undefined;
  isSmall: boolean = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenWidth = window.innerWidth;
    this.isSmall = this.screenWidth < 900 ? true : false;
  }

  products = [
    {
      name: 'palta',
      description:
        'La palta destaca por su alto valor nutritivo. Posee hidratos de carbono, proteínas, grasas, vitaminas A, C, D, B6 y E (importante antioxidante), fibra, agua y minerales, siendo abundante en potasio y magnesio y pobre en sodio.',
      img: '/assets/avocado.jpeg',
    },
    {
      name: 'mango',
      description:
        'Tiene acción beneficiosa en la piel, la vista, el cabello, las mucosas, los huesos y el sistema inmunológico, por su contenido en vitamina C y A, es rico en fibra y ayuda a reducir el colesterol.',
      img: '/assets/mango.jpeg',
    },
    {
      name: 'arandano',
      description:
        'El arándano es uno de los alimentos con mayor contenido de antioxidantes, además aporta vitamina C, potasio y fibra. Asimismo, el consumo de este fruto fortalece el sistema inmunitario.',
      img: '/assets/blueberry.jpeg',
    },
  ];

  ngOnInit(): void {
    this.getScreenSize();
  }
}
