import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  github(p: any) {
    if (p == "Glow") {
      window.open(
        "https://github.com/Gantedavamsikrishna/Beauty-care.git",
        "_blank"
      );
    } else if (p == "Api") {
      window.open(
        "https://github.com/Gantedavamsikrishna/products-api.git",
        "_blank"
      );
    } else if (p == "crud") {
      window.open(
        "https://github.com/Gantedavamsikrishna/Crud-operations.git",
        "_blank"
      );
    }
  }
}
