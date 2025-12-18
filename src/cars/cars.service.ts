import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    cars = [{
        id: 1,
        brand: 'Toyota',
        model: '4Runner'
    },
    {
        id: 2,
        brand: 'Toyota',
        model: 'Land Cruiser Prado'
    },
    {
        id: 3,
        brand: 'Mazda',
        model: 'mx-5'
    },
    {
        id: 4,
        brand: 'Nissan',
        model: '370z'
    }
    ];

    findAll() {
        return this.cars
    }

    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
        return car;

    }
}
