import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-base-modal',
    templateUrl: './base-modal.component.html',
    styleUrl: './base-modal.component.css'
})


export class BaseModalComponent {
    @Input() showModal: boolean = false
    @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

    @HostListener('document:keydown.space', ['$event'])

    handleKeyboardEvent(event: KeyboardEvent) {
        event.preventDefault()
        this.onCloseModal();
    }

    onCloseModal() {
        this.showModal = false
        this.closeModal.emit()
    }
}
