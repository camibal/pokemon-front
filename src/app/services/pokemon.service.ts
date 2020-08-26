import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getPokemons(index) {
    return this.http.get<any>(`${this.endpoint}/pokemon/${index}`);
  }

}
