import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GaleryComponent } from './galery/galery.component';
import { NgxViewerModule } from 'ngx-viewer';
import { BiographyComponent } from './biography/biography.component';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'http://www.gyuruvarazs.webtelek.hu'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: 'white',
      text:"black"
    }
  },
  theme: 'edgeless',
  type: 'info',

  content: {
    message: 'Tájékoztatjuk, hogy a lilinzenekar.hu weboldal sütiket használ a weboldal működése céljából.',
    dismiss: "Elfogadom",
    allow: "Sütik engedélyezése",
    deny: "Sütik elutasítása",
  }
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CalendarComponent,
    ContactComponent,
    GaleryComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxViewerModule,
    NgcCookieConsentModule.forRoot(cookieConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
