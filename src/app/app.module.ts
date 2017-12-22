
//  Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { CollapseDirective, CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';



//  Custom modules
import { AppRoutingModule } from './app-rounting.module';

import { environment } from '../environments/environment';

//  Components
import { AppComponent } from './app.component';
import { AppsComponent } from '@components/apps/apps.component';
import { HomeComponent } from '@components/home/home.component';
import { ContactComponent } from '@components/contact/contact.component';
import { FooterComponent } from '@components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AboutComponent } from './components/about/about.component';

//  Services
import { MediaQueryService } from '@app/services/media-query.service';
import { ContactService } from '@app/services/contact.service';


//  Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';
// import { CollapseDirective } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    AboutComponent,
    ClickOutsideDirective,
    // CollapseDirective,
    AppsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [
    MediaQueryService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
