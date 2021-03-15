import { Bicycle } from '../bicycle';
import { Vehicle } from '../vehichle';
import { VehicheFactory } from './vehicle-factory';

export class BicycleFactory extends VehicheFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
