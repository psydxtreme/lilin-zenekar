export interface Concerts {
  id: Number;
  date: String;
  place: String;
  link: String;
}

import { Injectable } from '@angular/core';
import concerts from '../assets/datasource/concerts.json';


@Injectable({
  providedIn: 'root'
})
export class InitService {
  concerts: Concerts[] = concerts;

  constructor() {
  }

}
