// import { MediaQueryService } from './shared/services/media-query.service';
import { routerTransition } from '@animations/router.animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()]
})
export class AppComponent {
}
