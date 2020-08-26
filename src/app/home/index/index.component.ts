import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  data: any[] = [];
  pokemons = [];

  pokemonSearch: any[];
  typeSearch: any[];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 50; i++) {
      this.pokemonService.getPokemons(i).subscribe(res => {
        pokemonData = {
          position: i,
          image: res.sprites.front_default,
          name: res.name,
          types: res.types
        };

        this.data.push(pokemonData);
        // debugger;
      },
        err => {
          console.log(err);
        }
      );
    }
  }

  getRow(item) {
    this.router.navigate([`/details/${item.position}`])
  }

  applyFilter(event: Event) {
    console.log(event)
  }

}
