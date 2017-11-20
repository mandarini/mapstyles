import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GmapService } from '../gmap.service';
import * as dark from '../../data/styles_dark.json';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;

  private map: any;

  constructor(private gapi: GmapService) {
  }

  ngAfterViewInit(): void {

    this.gapi.init.then((maps: any) => {
      const loc = new maps.LatLng(37.971575, 23.726235);
      var styledMapType = new maps.StyledMapType(dark);
      this.map = new maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'styled_map']
          },
        center: loc
      });
      this.map.mapTypes.set('styled_map', styledMapType);
      this.map.setMapTypeId('styled_map');
    });
  }

}
