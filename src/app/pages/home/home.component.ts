import { Component } from '@angular/core';
import { ArtigosComponent } from "../artigos/artigos.component";
import { SobreComponent } from "../sobre/sobre.component";

@Component({
  selector: 'app-home',
  imports: [ArtigosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
