
//  Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//  Firebase modules
import { AngularFireModule } from 'angularfire2';

//  Custom modules
import { AppRoutingModule } from 'app-rounting.module';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    AboutComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [MediaQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
