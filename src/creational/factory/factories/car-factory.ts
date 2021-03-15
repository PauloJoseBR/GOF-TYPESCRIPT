import { Car } from '../car';
import { Vehicle } from '../vehichle';
import { VehicheFactory } from './vehicle-factory';

export class CarFactory extends VehicheFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
