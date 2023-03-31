import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  services: any = [
    {
      urlImg: 'https://www.autofacil.es/wp-content/uploads/2021/05/botonaireacondicionado-1.jpg',
      title: 'Aire Acondicionado',
      description: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.'
    },
    {
      urlImg: 'https://gossipvehiculo.com/wp-content/uploads/2023/01/CALEFACCION.jpg',
      title: 'Calecfacción',
      description: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.'
    },
    {
      urlImg: 'https://conduciendo.com/wp-content/uploads/2017/10/Lubricante7-6-16.jpg',
      title: 'Lubricentro',
      description: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.'
    },
    {
      urlImg: 'https://quilloncity.cl/wp-content/uploads/2022/09/vulcanizacion.jpg',
      title: 'Vulcanisación',
      description: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.'
    },
    {
      urlImg: 'https://automujer.com/wp-content/uploads/2021/05/sanitizar-auto.jpeg',
      title: 'Sanitización',
      description: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.'
    },
    {
      urlImg: 'https://images.ctfassets.net/n7hs0hadu6ro/2xwX0eBD62LPlWLGd2x0Ma/fb83bde2213027ae3443ef683681e324/iStock-1347150429.jpg?w=1000&h=667&fl=progressive&q=50&fm=jpg',
      title: 'Y más',
      description: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.'
    }
  ]

}
