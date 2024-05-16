import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service'
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrl: './vehicles.component.css',
    animations: [
        trigger('fadeInStagger', [
            transition('* <=> *', [
                query(':enter', [
                    style({ opacity: 0, transform: 'translateX(-50px)' }),
                    stagger(250, [
                        animate('700ms ease', style({ opacity: 1, transform: 'translateX(0)'}))
                    ])
                ], { optional: true })
            ])
        ]),
        trigger('openClose', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('200ms ease', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('200ms ease', style({ opacity: 0 }))
            ])
        ])
    ]
})

export class VehiclesComponent implements OnInit {
    loadedVehicles: any[] = []
    isLoading: boolean = false
    isModalOpen: boolean = false
    selectedVehicle: any

    constructor(private vehiclesService: VehiclesService) {}

    ngOnInit(): void {
        this.onLoadVehicles()
    }

    onLoadVehicles(): void {
        this.isLoading = true
        this.vehiclesService.getAllVehiclesWithDetails()
        .subscribe((allVehicles: any[]) => {
          this.loadedVehicles = allVehicles
          this.isLoading = false
        })
    }

    openModal(vehicle: any): void {
        this.selectedVehicle = vehicle
        this.isModalOpen = true
    }

    onCloseModal(): void {
        this.isModalOpen = false
    }
}
