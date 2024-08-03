import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mailstrucutre } from './mailstrucutre/mailstrucutre.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiurl = 'https://portfoliomail-9o3x.onrender.com/send';

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
