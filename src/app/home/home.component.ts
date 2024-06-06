import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  texts: String[] = ['Developer...', 'Learner..'];
  currenttext: number = 0;
  displaytext: String = '';
  charIndex: number = 0;
  ngOnInit(): void {
    this.typetext();
  }
  typetext(): void {
    if (this.charIndex < this.texts[this.currenttext].length) {
      this.displaytext += this.texts[this.currenttext].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typetext(), 100);
    } else {
      setTimeout(() => this.earsetext(), 1000);
    }
  }
  earsetext(): void {
    if (this.charIndex > 0) {
      this.displaytext = this.displaytext.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.earsetext(), 100);
    } else {
      this.currenttext = (this.currenttext + 1) % this.texts.length;
      setTimeout(() => this.typetext(), 150);
    }
  }
}
