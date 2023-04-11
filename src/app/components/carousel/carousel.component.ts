import { Component, VERSION, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  title = 'angular-demo';
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  items = [
    {
      id: '1',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery1.jpeg',
      thumb: 'assets/img-mato/galery/galery1.jpeg',
      subHtml: ''
    },
    {
      id: '2',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery2.jpeg',
      thumb: 'assets/img-mato/galery/galery2.jpeg',
      subHtml: ''
    },
    {
      id: '3',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery3.jpeg',
      thumb: 'assets/img-mato/galery/galery3.jpeg',
      subHtml: ''
    },
    {
      id: '4',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery4.jpeg',
      thumb: 'assets/img-mato/galery/galery4.jpeg',
      subHtml: ''
    },
    {
      id: '5',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery5.jpeg',
      thumb: 'assets/img-mato/galery/galery5.jpeg',
      subHtml: ''
    },
    {
      id: '6',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery6.jpeg',
      thumb: 'assets/img-mato/galery/galery6.jpeg',
      subHtml: ''
    },
    {
      id: '7',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery7.jpeg',
      thumb: 'assets/img-mato/galery/galery7.jpeg',
      subHtml: ''
    },
    {
      id: '8',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery8.jpeg',
      thumb: 'assets/img-mato/galery/galery8.jpeg',
      subHtml: ''
    },
    {
      id: '9',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery9.jpeg',
      thumb: 'assets/img-mato/galery/galery9.jpeg',
      subHtml: ''
    },
    {
      id: '10',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery10.jpeg',
      thumb: 'assets/img-mato/galery/galery10.jpeg',
      subHtml: ''
    },
    {
      id: '11',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery11.jpeg',
      thumb: 'assets/img-mato/galery/galery11.jpeg',
      subHtml: ''
    },
    {
      id: '12',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery12.jpeg',
      thumb: 'assets/img-mato/galery/galery12.jpeg',
      subHtml: ''
    },
    {
      id: '13',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery13.jpeg',
      thumb: 'assets/img-mato/galery/galery13.jpeg',
      subHtml: ''
    },
    {
      id: '14',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery14.jpeg',
      thumb: 'assets/img-mato/galery/galery14.jpeg',
      subHtml: ''
    },
    {
      id: '15',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery15.jpeg',
      thumb: 'assets/img-mato/galery/galery15.jpeg',
      subHtml: ''
    },
    {
      id: '16',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery16.jpeg',
      thumb: 'assets/img-mato/galery/galery16.jpeg',
      subHtml: ''
    },
    {
      id: '17',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery17.jpeg',
      thumb: 'assets/img-mato/galery/galery17.jpeg',
      subHtml: ''
    },
    {
      id: '18',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery18.jpeg',
      thumb: 'assets/img-mato/galery/galery18.jpeg',
      subHtml: ''
    },
    {
      id: '19',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery19.jpeg',
      thumb: 'assets/img-mato/galery/galery19.jpeg',
      subHtml: ''
    },
    {
      id: '20',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery20.jpeg',
      thumb: 'assets/img-mato/galery/galery20.jpeg',
      subHtml: ''
    },

    {
      id: '21',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery21.jpeg',
      thumb: 'assets/img-mato/galery/galery21.jpeg',
      subHtml: ''
    },
    // {
    //   id: '22',
    //   size: '1400-933',
    //   src: 'assets/img-mato/galery/galery22.jpeg',
    //   thumb: 'assets/img-mato/galery/galery22.jpeg',
    //   subHtml: ''
    // },
    {
      id: '23',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery23.jpeg',
      thumb: 'assets/img-mato/galery/galery23.jpeg',
      subHtml: ''
    },
    {
      id: '24',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery24.jpeg',
      thumb: 'assets/img-mato/galery/galery24.jpeg',
      subHtml: ''
    },
    {
      id: '25',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery25.jpeg',
      thumb: 'assets/img-mato/galery/galery25.jpeg',
      subHtml: ''
    },
    {
      id: '26',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery26.jpeg',
      thumb: 'assets/img-mato/galery/galery26.jpeg',
      subHtml: ''
    },
    {
      id: '27',
      size: '1400-933',
      src: 'assets/img-mato/galery/galery27.jpeg',
      thumb: 'assets/img-mato/galery/galery27.jpeg',
      subHtml: ''
    },


  ];
  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
  };
}
