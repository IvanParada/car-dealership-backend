import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto';


@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Subaru',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Mazda',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Porsche',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Mitsubishi',
      createdAt: Date.now(),
    },
  ];


  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: Date.now(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB.updatedAt = Date.now();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter(car => car.id !== id);
  }
}
