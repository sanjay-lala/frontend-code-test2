import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-vehicle-details',
    templateUrl: './vehicle-details.component.html',
    styleUrl: './vehicle-details.component.css'
})

export class VehicleDetailsComponent {
    @Input() vehicle
    @Output() showDetailsClicked: EventEmitter<void> = new EventEmitter<void>();

    onShowDetails(): void {
        this.showDetailsClicked.emit(this.vehicle)
    }
}
