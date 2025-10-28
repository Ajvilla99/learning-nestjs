import { Injectable } from '@nestjs/common';

import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  /*
   * El constructor es un método especial de una clase que se ejecuta automáticamente cuando se crea una instancia de esa clase.
   * En NestJS, el constructor se utiliza principalmente para la inyección de dependencias, lo que permite que el framework entregue automáticamente instancias de otros servicios o clases que la clase necesita para funcionar.
   */
  constructor(
    private readonly carsService: CarsService,
    private readonly BrandService: BrandsService
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'Seed executed sucessfull';
  }
}
