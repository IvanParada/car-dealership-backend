import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    cars: Car[] = [{
        id: uuid(),
        brand: 'Toyota',
        model: '4Runner'
    },
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Land Cruiser Prado'
    },
    {
        id: uuid(),
        brand: 'Mazda',
        model: 'mx-5'
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: '370z'
    }
    ];

    findAll() {
        return this.cars
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
        return car;

    }
}
