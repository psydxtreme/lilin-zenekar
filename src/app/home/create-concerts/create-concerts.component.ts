import { Component, OnInit } from '@angular/core';
import { Concert } from '../../models/concert.model';
import { FirestoreCrudService } from '../../services/firestore.crud.service';

@Component({
  selector: 'app-create-concerts',
  templateUrl: './create-concerts.component.html',
  styleUrls: ['./create-concerts.component.scss']
})
export class CreateConcertsComponent implements OnInit {
  concert: Concert = new Concert();
  submitted = false;

  constructor(private firebaseCrudService: FirestoreCrudService) { }

  ngOnInit(): void {
  }
  createConcert(): void {
    this.firebaseCrudService.create(this.concert).then(() => {
      console.log('Siker');
      this.submitted = true;
    });
  }
  newConcert(): void {
    this.submitted = false;
    this.concert = new Concert();
  }
}
