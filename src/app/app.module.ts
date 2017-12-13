
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
