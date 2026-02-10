import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/cardService';
import { CardModel } from '../card/card.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true, // <-- mark it as standalone
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  pokemonCards: CardModel[] = [];
  nhlCards: CardModel[] = [];
  onepieceCards: CardModel[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.pokemonCards = this.cardService.getPokemonCards();
    this.nhlCards = this.cardService.getNhlCards();
    this.onepieceCards = this.cardService.getonepieceCards();
  }
}
