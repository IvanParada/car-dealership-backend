import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
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
        brand: 'Subaru',
        model: 'Forester'
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Patrol'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'CRV'
    }
];