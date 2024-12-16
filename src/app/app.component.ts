import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewCardComponent } from "./new-card/new-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NewCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban';
}
