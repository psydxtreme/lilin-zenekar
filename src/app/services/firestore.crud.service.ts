import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Concert } from '../models/concert.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreCrudService {
  private dbPath = '/concerts';
  concertsRef: AngularFirestoreCollection<Concert>;
  constructor(private db: AngularFirestore) {
    this.concertsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Concert> {
    return this.concertsRef;
  }
  create(concert: Concert): any {
    return this.concertsRef.add({ ...concert });
  }
  update(id: string, data: any): Promise<void> {
    return this.concertsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.concertsRef.doc(id).delete();
  }
}
