import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PokemonUseCase } from '../../../../domain/usecase/pokemonUseCase';
import { Pokemon } from '../../../../domain/models/pokemon/pokemon';
import { InfiniteScrollDirective } from "ngx-infinite-scroll";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, InfiniteScrollDirective],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

  pokemons: Pokemon[] = [];
  pokemonSelected: Pokemon | undefined;
  isLoading = false;
  offset = 0;
  limit = 20;

  constructor(private _pokemonUseCase: PokemonUseCase) {}

  ngOnInit(): void {
    this.loadData();
  } 

  toggleLoading = ()=> {
    this.isLoading=!this.isLoading;
  }


  loadData= ()=>{
    this.toggleLoading();
    this._pokemonUseCase.getAll(this.offset, this.limit).subscribe({
     next:response=>this.pokemons.push(...response),
     error:err=>console.log(err),
     complete:()=>this.toggleLoading()
    })
  }

  selectPokemon = (pokemon: Pokemon) => this.pokemonSelected = pokemon;


  onScroll= ()=>{
    if (this.isLoading) return;
    this.offset+= this.limit;
    this.loadData();
   }


}
