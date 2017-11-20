import { Injectable } from '@angular/core';

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAwVnwE1bEZf_Bkk_pSkGM0XlBSXJocVUY&callback=initMap';

@Injectable()
export class GmapService {

      private loadAPI: Promise<any>;

      constructor() {}

      private loadScript(): void {
          if (!document.getElementById('gmap')) {
              const script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = url;
              script.id = 'gmap';
              document.head.appendChild(script);
          }
      }

      get init(): Promise<any> {
          if (!this.loadAPI) {
              this.loadAPI = new Promise((resolve) => {
                window['initMap'] = (ev: any) => {
                    resolve(window['google'].maps);
                  };
                this.loadScript();
              });
          }
          return this.loadAPI;
      }
}
