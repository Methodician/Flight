import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@animations/router.animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [routerTransition()]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
