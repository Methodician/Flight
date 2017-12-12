import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    // { path: 'apps', component: AppsComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'contact', component: ContactComponent },
  //ATTN: this route MUST live at the end of all the routes in this array.
//   {
//     path: '**',
//     component: PageNotFoundComponent
//   }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }