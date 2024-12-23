import { Injectable } from '@angular/core';
import { Icard } from '../new-card/modal/modal.model';

@Injectable({ providedIn: 'root' })
export class CardsService {
  constructor() {}
  cards: Icard[] | string = [];

  getCards() {
    const storedCards = localStorage.getItem('cards');

    if (!storedCards) {
      console.error('There is nothing to display');
      return [];
    }

    try {
      this.cards = JSON.parse(storedCards);
    } catch (error) {
      console.error('Error parsing stored cards:', error);
      return [];
    }

    return this.cards;
  }
}
