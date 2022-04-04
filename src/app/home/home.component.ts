import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  concert: Observable<any[]>;

  constructor(private db: AngularFirestore
  ) {
    this.concert = this.db.collection('concerts').valueChanges();
  }

  ngOnInit() {
  }


}
