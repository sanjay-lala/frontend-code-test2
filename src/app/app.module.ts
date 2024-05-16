import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailsComponent } from './vehicles/vehicle-details/vehicle-details.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleModalComponent } from './vehicles/vehicle-details/vehicle-modal/vehicle-modal.component';
import { LoadingSpinnerComponent } from './UI/loading-spinner/loading-spinner.component';
import { BaseModalComponent } from './UI/base-modal/base-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        VehiclesComponent,
        VehicleDetailsComponent,
        VehicleModalComponent,
        LoadingSpinnerComponent,
        BaseModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })

export class AppModule { }
