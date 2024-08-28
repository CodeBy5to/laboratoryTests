import { Pokemon } from "../../../domain/models/pokemon/pokemon";
import { Mapper } from "./common/maps";

export class PokemonMapper extends Mapper<Pokemon> {

    override fromMap(obj: any): any {
        return {
            name: obj.name,
            url: obj.url
          }
    }

    mapDesc(obj: any): Pokemon {
        return {
            name: obj.name,
            url: obj.url,
            imageUrl: obj.sprites.front_default,
            height: obj.height,
            weight: obj.weight,
            abilities: obj.abilities.map((ability: any) => ({
              name: ability.ability.name,
            })),
            stats: obj.stats.map((stat: any) => ({
              name: stat.stat.name,
              value: stat.base_stat
            }))
          };
    }
    
}