import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { first, Observable } from 'rxjs';
import { Concert } from '../models/concert.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/authentication.service';
import { FirestoreCrudService } from '../services/firestore.crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  concert: Observable<any[]>;

  constructor(private db: AngularFirestore,
    private authService: AuthService,
    private fireService: FirestoreCrudService
  ) {
    this.concert = this.db.collection('concerts').valueChanges();
  }

  ngOnInit() {
    return console.log(this.authService.isLoggedIn)
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  
  }

  deleteConcert() {
    this.db
      .collection('concerts')
      .get()
      .toPromise()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc : any) => {
          doc.ref.delete();
        });
      });
  }
}

