import { Injectable, Output, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icard } from './modal.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  @Output() cards = signal<Icard[]>([]);

  constructor() {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      try {
        this.cards.set(JSON.parse(savedCards));
      } catch (e) {
        console.error('Error parsing saved cards:', e);
      }
    }
  }

  addCard(formData: NgForm) {
    const card: Icard = formData.value;

    if (!card.status || !card.task) {
      console.error('Card is missing required fields');
      return;
    }

    const currentCards = this.cards();
    this.cards.set([...currentCards, card]);

    localStorage.setItem('cards', JSON.stringify(this.cards()));
  }
}
