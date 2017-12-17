import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@animations/router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../shared/page-styles.css'],
  animations: [routerTransition],
  host: { '[@routerTransition]': '' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
