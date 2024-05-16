import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Vehicle } from './vehicle'

@Injectable({
    providedIn: 'root'
})

export class VehiclesService {

    constructor(private http: HttpClient) { }

    getAllVehicles(): Observable<any> {
        return this.http.get('https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/')
    }

    getVehicleById(id: string): Observable<any> {
        return this.http.get(`https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/${id}`)
        .pipe(
        catchError(error => {
            console.error(`Failed to fetch vehicle with id: '${id}':`, error);
            return of(null);
        }));
    }

    getAllVehiclesWithDetails(): Observable<any> {
        const allVehicles$ = this.getAllVehicles()

        const allVehiclesWithDetails$ = allVehicles$.pipe(
            switchMap(vehicles => {
                const vehicleDetails$ = vehicles.map(vehicle => {
                    const vehicleWithDetail = this.getVehicleById(vehicle.id).pipe(
                        map(details => {
                            return { ...vehicle, details }
                        }),
                        catchError(error => {
                            console.error('Failed to fetch details for vehicle:', vehicle.id, error);
                            return of(null);
                        })
                    )
                    return vehicleWithDetail
                })
                return forkJoin(vehicleDetails$)
            }),
            map((vehiclesWithDetails: any[]) => {
                return vehiclesWithDetails.filter(vehicle => vehicle.details !== null)
            })
        )

        return allVehiclesWithDetails$
    }
}

