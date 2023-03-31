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
      src: 'assets/img-mato/galery/galeria1.jpg',
      thumb: 'assets/img-mato/galery/galeria1.jpg',
      subHtml: ''
    },
    {
      id: '4',
      size: '1400-933',
      src: 'assets/img-mato/galery/galeria7.jpg',
      thumb: 'assets/img-mato/galery/galeria7.jpg',
      subHtml: ''
    },
    {
      id: '5',
      size: '1400-933',
      src: 'assets/img-mato/galery/galeria5.jpg',
      thumb: 'assets/img-mato/galery/galeria5.jpg',
      subHtml: ''
    },
    {
      id: '6',
      size: '1400-933',
      src: 'assets/img-mato/galery/galeria6.jpg',
      thumb: 'assets/img-mato/galery/galeria6.jpg',
      subHtml: ''
    },
  ];
  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
  };
}
