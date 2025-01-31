import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  texts: String[] = ["Developer...", "Learner.."];
  currenttext: number = 0;
  displaytext: String = "";
  charIndex: number = 0;
  ngOnInit(): void {
    this.typetext();
  }
  downloadResume() {
    const link = document.createElement("a");
    link.href = "../assests/VamsiKrishna.pdf";
    link.download = "VamsiKrishna.pdf";
    link.click();
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
