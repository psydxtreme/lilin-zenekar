import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(contactForm: NgForm) {
    const email = contactForm.value;
    console.log(email.message);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://mandrillapp.com/api/1.0/messages/send',
      { "key": "s_4yEbCkZG4ruDFCesbI5w", "message": { "from_email": "hadobas.milan@gmail.com", "text": email.message, "subject": "Lilin-Zenekar-Kapcsolatfelvétel", "to": [{ email: "hadobas.milan@gmail.com" }] } },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );

  }

  ngOnInit(): void {
  }

}
