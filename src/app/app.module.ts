
//  Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';


import { CollapseDirective, CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

//  Custom modules
import { AppRoutingModule } from './app-rounting.module';

import { environment } from '../environments/environment';

//  Components
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { FooterComponent } from '@components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

//  Services
import { MediaQueryService } from '@app/services/media-query.service';
import { AboutComponent } from './components/about/about.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AppsComponent } from '@components/apps/apps.component';
import { ContactComponent } from '@components/contact/contact.component';
import { ContactService } from '@app/services/contact.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    AboutComponent,
    ClickOutsideDirective,
    CollapseDirective,
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
    CarouselModule,
  ],
  providers: [
    MediaQueryService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
