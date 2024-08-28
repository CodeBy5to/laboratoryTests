import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { PokemonGateway } from './domain/models/pokemon/gateway/pokemonGateway';
import { PokemonApiService } from './infraestructure/driven-adapter/pokemon-api/pokemonApi.service';
import { HashGeneratorGateway } from './domain/models/hash-generator/gateway/hashGeneratorGateway';
import { HashGeneratorService } from './infraestructure/driven-adapter/hash-generator/hash-generator.service';
import { ErrorInterceptor } from './infraestructure/helpers/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: PokemonGateway, useClass: PokemonApiService},
    {provide: HashGeneratorGateway, useClass: HashGeneratorService}
  ]
};
