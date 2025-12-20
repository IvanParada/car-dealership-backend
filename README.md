<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Car Dealership

> Este es un backend desarrollado con Nest usando Nest CLI con el objetivo de reforzar los conceptos fundamentales del framework:
>
> - Módulos
> - Controladores
> - Servicios
> - Inyección de dependencias
> - Pipes
> - Métodos
> - DTOs
> - Interfaces
> - Seed para la carga de datos


## Seed - Populate DB
> Ejecutar este endpoint antes de consumir la API.


```
http://localhost:3000/seed
```

<details>
<summary><strong>Brand Resource</strong></summary>

* Get Brands (GET)
```
http://localhost:3000/brands

```
* Get Brand By Id (GET)
```
http://localhost:3000/brands/:id
```

* Create Brand (POST)
```
http://localhost:3000/brands
```
  Body:
  ```json
  {
    "name": " "
  }
  ```

* Update Brand (PATCH)
```
http://localhost:3000/brands/:id
```
  Body:
  ```json
  {
    "name": " "
  }
  ```

* Delete Brand (DELETE)
```
http://localhost:3000/brands/:id
```

</details>

<details>
<summary><strong>Cars Resource</strong></summary>

* Get Cars (GET)
```
http://localhost:3000/cars
```

* Get Car By Id (GET)
```
http://localhost:3000/cars/:id
```

* Create Car (POST)
```
http://localhost:3000/cars
```
  Body:
  ```json
  {
    "brand": " ",
    "model": " "
  }
  ```

* Update Car (PATCH)

```
http://localhost:3000/cars/:id
```
  Body:

```json
{
  "brand": " ",
  "model": " "
}
```

* Delete Car (DELETE)
```
http://localhost:3000/cars/:id
```
</details>
