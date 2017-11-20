import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GmapService } from '../gmap.service';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;

  private map: any;

  constructor(private gapi: GmapService) {}

  ngAfterViewInit(): void {

    this.gapi.init.then((maps: any) => {
      const loc = new maps.LatLng(37.971575, 23.726235);

      this.map = new maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        center: loc,
        scrollwheel: true,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true,
        streetViewControl: false,
        scaleControl: true,
        zoomControlOptions: {
          style: maps.ZoomControlStyle.LARGE,
          position: maps.ControlPosition.RIGHT_BOTTOM
        }
      });
    });
  }

}
