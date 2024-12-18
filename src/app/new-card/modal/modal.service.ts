import { Injectable, Output, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icard } from './modal.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor() {}
  @Output() cards = signal<Icard[]>([]);

  addCard(formData: NgForm) {
    const card: Icard = formData.value;

    if (!card.status || !card.task) {
      console.error('Card is missing required fields');
      return;
    }

    this.cards.set([...this.cards(), card]);
    localStorage.setItem('cards', JSON.stringify(this.cards()));
  }
}
