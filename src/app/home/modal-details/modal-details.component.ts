import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent implements OnInit {

  // @Input() item: any[] = [];

  data: any[] = [];

  pokemon: any = '';
  pokemonImg = '';
  pokemonImg2 = '';
  pokemonImg3 = '';
  pokemonType = [];
  pokemonMoves = [];

  constructor(private activatedRouter: ActivatedRoute, private pokemonService: PokemonService) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )

    this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void { }

  getPokemon(id) {
    this.pokemonService.getPokemons(id).subscribe(res => {
      // console.log(res)
      this.pokemon = res;
      this.pokemonImg = this.pokemon.sprites.other.dream_world.front_default;
      this.pokemonImg2 = this.pokemon.sprites.back_shiny;
      this.pokemonImg3 = this.pokemon.sprites.front_default;
      this.pokemonType = res.types[0].type.name;
      this.pokemonMoves = res.moves[0].move.name;

      this.data.push();
    },
      err => {
        console.log(err);
      }
    )
  }

}