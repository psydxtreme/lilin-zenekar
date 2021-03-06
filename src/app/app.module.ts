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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import {getDatabase, provideDatabase} from "@angular/fire/database"
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CreateConcertsComponent } from './home/create-concerts/create-concerts.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthService } from "src/app/services/authentication.service";
import { NgxPaginationModule } from 'ngx-pagination';


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'gyuruvarazs.webtelek.hu'
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
    message: 'T??j??koztatjuk, hogy a lilinzenekar.hu weboldal s??tiket haszn??l a weboldal m??k??d??se c??lj??b??l.',
    dismiss: "Elfogadom",
    allow: "S??tik enged??lyez??se",
    deny: "S??tik elutas??t??sa",
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
    BiographyComponent,
    CreateConcertsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxViewerModule,
    NgxPaginationModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
