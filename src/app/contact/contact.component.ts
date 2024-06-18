import { Component } from '@angular/core';
import { Mailstrucutre } from '../mailstrucutre/mailstrucutre.module';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  mail: String = '';
  mailstructure: Mailstrucutre = { subject: '', message: '' };

  name: string = '';
  isLoading: boolean = false;
  resmsg: boolean = false;

  constructor(private mailservice: MailService) {}

  sendmail(): void {
    this.isLoading = true;
    this.mailservice.sendMail(this.mail, this.mailstructure).subscribe(
      (res) => {
        this.isLoading = false;
        this.resmsg = true;
        this.resetfields();
        setTimeout(() => {
          this.resmsg = false;
        }, 3000);
      },
      (error) => {
        this.isLoading = false;
        console.error('error msg:', error);
      }
    );
  }
  resetfields(): void {
    this.name = '';
    this.mail = '';
    this.mailstructure = { subject: '', message: '' };
  }
}
