import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon/pokemon';
import { PokemonGateway } from '../models/pokemon/gateway/pokemonGateway';

@Injectable({
  providedIn: 'root'
})

export class PokemonUseCase {
  constructor( private _pokemonGateway: PokemonGateway) {}  

  getAll (offset: number, limit: number) : Observable <Array<Pokemon>> {
    return this._pokemonGateway.getAll(offset, limit);
  }

}