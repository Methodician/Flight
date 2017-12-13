import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class MediaQueryService {

  deviceGroup = new BehaviorSubject('desktop');

  constructor(ngZone: NgZone) {
    this.setDeviceGroup();
    window.onresize = (event) => {
      ngZone.run(() => {
        this.setDeviceGroup();
      });
    };
  }

  setDeviceGroup(){
    if (window.matchMedia('(min-width : 1200px)').matches) {
      this.deviceGroup.next('desktop');
      return;
    }
    if (window.matchMedia('(min-width: 1020px)').matches) {
      this.deviceGroup.next('iPadLandscape');
      return;
    }
    if (window.matchMedia('(min-width: 760px)').matches) {
      this.deviceGroup.next('iPadPortrait');
      return;
    }
    if (window.matchMedia('(min-width: 732px)').matches) {
      this.deviceGroup.next('bigPhoneLandscape');
      return;
    }
    if (window.matchMedia('(min-width : 500px)').matches) {
      this.deviceGroup.next('phonesLandscape');
      return;
    }
    this.deviceGroup.next('phonesPortrait');
  }
}
