# LaboratoyTests #1

![Project Banner](path/to/banner.gif) <!-- Banner Image -->

## Descripción
Este proyecto es una aplicación web desarrollada en Angular 18 basado en arquitectura hexagonal y utiliza técnicas modernas como infinite scroll y skeleton UI para mejorar la experiencia del usuario. 
Se introducen algoritmos de cifrado y hash así como tambien consumo de Apis y manejo de errores.

## Vistas y funcionalidades

### Pokemon-dashboard

Obtiene y muestra una lista de Pokémon utilizando la PokeAPI. A medida que se desplaza hacia abajo, se cargan más Pokémon automáticamente.
Implementa un scroll infinito para cargar más Pokémon a medida que el usuario se desplaza hacia abajo en la lista. 
Utiliza la biblioteca `ngx-infinite-scroll` para gestionar la carga de datos adicional sin recargar la página.

![2](https://github.com/user-attachments/assets/35fc7744-2c8b-48fc-9d31-4e7b92e7239c)


Muestra una interfaz de usuario esquelética mientras se cargan los datos de la PokeAPI. El diseño esquelético proporciona una vista preliminar de la estructura de la página, mejorando la experiencia visual durante el tiempo de carga.
Uso de animaciones en css para el skeleton y el scroll

- **Pulse**: esta animación es la que nos dará el efecto del skeleton
```css
@keyframes pulse {
  0% {
    background-color: var(--bg-item-hex);
  }
  50% {
    background-color: var(--bg-skeleton);
  }
  100% {
    background-color: var(--bg-item-hex);
  }
}
```
- **show**: esta animación es la que nos dará el efecto del scroll

```css
@keyframes show {
  from {
    opacity: 0; scale: 10%;
  }
  to {
    opacity: 1; scale: 100%;
  }
}
```


![1](https://github.com/user-attachments/assets/ecc9ffd8-02e2-457f-ba35-d5a26f4d5a92)



### Arquitectura Hexagonal

El proyecto sigue el patrón de arquitectura hexagonal, que incluye:

- **domain**: Contiene la lógica de negocio y las interfaces principales y define las interfaces para los adaptadores de entrada y salida.
- **UI**: Contiene y configura los componentes en los cuales se renderiza la información 
- **Infrastructure**: Maneja las configuraciones específicas del entorno y servicios externos e implementa los adaptadores que interactúan con APIs externas, como la PokeAPI.

![Arquitectura Hexagonal](path/to/hexagonal-architecture.gif) <!-- GIF or diagram showing hexagonal architecture -->

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
