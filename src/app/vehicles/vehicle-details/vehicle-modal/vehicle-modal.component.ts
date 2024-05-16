import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-vehicle-modal',
    templateUrl: './vehicle-modal.component.html',
    styleUrl: './vehicle-modal.component.css'
})

export class VehicleModalComponent implements OnInit{
    @Input() vehicle: any
    @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

    emissionString: string = ''

    ngOnInit(): void {
        this.generateEmissionsString()
    }

    onCloseModal(): void {
        this.closeModal.emit()
    }

    generateEmissionsString(): void {
        this.emissionString = this.vehicle.details.meta.emissions.template.replace('$value', this.vehicle.details.meta.emissions.value)
    }


}
