import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';

export abstract class PokemonGateway {
    abstract getAll(offset:number, limit:number): Observable<Array<Pokemon>>;
} 