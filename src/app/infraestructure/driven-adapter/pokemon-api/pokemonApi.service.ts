import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, forkJoin, map, mergeMap, Observable } from 'rxjs';
import { PokemonGateway } from '../../../domain/models/pokemon/gateway/pokemonGateway';
import { Pokemon } from '../../../domain/models/pokemon/pokemon';
import { PokemonMapper } from '../../helpers/maps/pokemon-mapper';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService extends PokemonGateway {

    private _url = 'https://pokeapi.co/api/v2/pokemon/';
    private mapper: PokemonMapper = new PokemonMapper;

    constructor(private http: HttpClient) {super();}


    override getAll(offset: number, limit: number): Observable<Array<Pokemon>> {
      return this.http.get<any>(`${this._url}?offset=${offset}&limit=${limit}`).pipe(
        map(response => response.results.map((res: any) => this.mapper.fromMap(res))),
        mergeMap(pokemons => {
          const requests: Observable<Pokemon>[]  = pokemons.map((pokemon: { url: string; }) => 
            this.http.get<any>(pokemon.url).pipe(
              map(response => this.mapper.mapDesc(response))
            )
          );
          return forkJoin(requests);
        }), delay(1000)
      );
    }

}