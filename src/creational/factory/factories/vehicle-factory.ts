import { Vehicle } from '../vehichle';

export abstract class VehicheFactory {
  abstract getVehicle(vehicleName: string): Vehicle;
  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}
