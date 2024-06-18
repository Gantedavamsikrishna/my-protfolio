import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Mailstrucutre,
  MailstrucutreModule,
} from './mailstrucutre/mailstrucutre.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiurl = 'http://localhost:8080/send';

  constructor(private http: HttpClient) {}

  sendMail(
    mail: String,
    mailstrucutre: Mailstrucutre
  ): Observable<{ message: String }> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post<{ message: String }>(
      `${this.apiurl}/${mail}`,
      mailstrucutre,
      {
        headers,
      }
    );
  }
}
