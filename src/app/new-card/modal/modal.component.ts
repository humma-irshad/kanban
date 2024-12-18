import { Component, inject, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  modalService = inject(ModalService);
  @Input() isModalVisible!: WritableSignal<boolean>;
  formInvalid: boolean = false;

  onSubmit(form: NgForm, event: Event) {
    event.preventDefault();

    if (form.invalid) {
      this.formInvalid = true;
      return;
    }

    const { task, status } = form.value;
    if (!task?.trim().length || !status?.trim().length) {
      this.formInvalid = true;
      return;
    }

    this.modalService.addCard(form);

    this.isModalVisible.set(false);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
}
