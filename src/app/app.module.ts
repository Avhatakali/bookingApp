import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path:'', component: HomeComponent},
    {path:'reservation', component: ReservationComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'news', component: NewsComponent},

    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
