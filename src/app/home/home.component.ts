import { Component, OnInit } from '@angular/core';
import { Concerts, InitService } from '../init.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  concerts : Concerts[];

  constructor(
    private initService: InitService
  ) { }

  ngOnInit(): void {
    this.concerts = this.initService.concerts;
  }

}
