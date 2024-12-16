import { Component, signal } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css',
})
export class NewCardComponent {
  modalVisibility = signal<boolean>(false);

  toggleModalVisibility() {
    this.modalVisibility.update((value) => !value);
  }
}
