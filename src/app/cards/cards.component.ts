import { Component, inject, signal } from '@angular/core';
import { Icard } from '../new-card/modal/modal.model';
import { CardsService } from './cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards = signal<Icard[] | undefined>(undefined);
  modalService = inject(CardsService);

  ngOnInit() {
    const cardData = this.modalService.getCards();

    if (Array.isArray(cardData)) {
      this.cards.set(cardData);
      console.log(this.cards());
    } else {
      this.cards.set(undefined);
    }
  }
}
