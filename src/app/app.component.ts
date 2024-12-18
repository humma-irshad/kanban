import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewCardComponent } from "./new-card/new-card.component";
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NewCardComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban';
}
