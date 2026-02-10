import { Injectable } from '@angular/core';
import { CardModel } from './card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private pokemonCards: CardModel[] = [];
  private nhlCards: CardModel[] = [];
  private onepieceCards: CardModel[] = [];

  constructor() {
    this.pokemonCards = [
      {
        ID: 1,
        title: 'Pikachu',
        description: 'Electric-type Pokémon',
        imageUrl: 'https://m.media-amazon.com/images/I/81JbXBLTAVL._AC_UF894,1000_QL80_.jpg',
        price: 25,
      },
      {
        ID: 2,
        title: 'Charizard',
        description: 'Fire/Flying Pokémon',
        imageUrl:
          'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH12/SWSH12_EN_49.png',
        price: 120,
      },
      {
        ID: 3,
        title: 'Bulbasaur',
        description: 'Grass/Poison Pokémon',
        imageUrl:
          'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH12/SWSH12_EN_1.png',
        price: 15,
      },
      {
        ID: 4,
        title: 'Squirtle',
        description: 'Water-type Pokémon',
        imageUrl:
          'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH12/SWSH12_EN_2.png',
        price: 20,
      },
      {
        ID: 5,
        title: 'Eevee',
        description: 'Normal-type Pokémon',
        imageUrl:
          'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH12/SWSH12_EN_3.png',
        price: 30,
      },
    ];

    this.nhlCards = [
      {
        ID: 1,
        title: 'Wayne Gretsky',
        description: 'Oilers Legend and NHL All-Time Leading Scorer',
        imageUrl: 'https://images.production.sportscardinvestor.com/275_348_5',
        price: 100,
      },
      {
        ID: 2,
        title: 'Mario Lemieux',
        description: 'Penguins Legend and NHL Hall of Famer',
        imageUrl: 'https://i.ebayimg.com/images/g/Vg0AAOSwUUdit79X/s-l1200.jpg',
        price: 90,
      },
      {
        ID: 3,
        title: 'Sidney Crosby',
        description: 'Current Penguins Captain and NHL Superstar',
        imageUrl: 'https://limperiumducollectionneur.com/wp-content/uploads/img_7927.jpeg',
        price: 80,
      },
      {
        ID: 4,
        title: 'Alex Ovechkin',
        description: 'Capitals Superstar and Goal-Scoring Machine',
        imageUrl:
          'https://static01.nyt.com/athletic/uploads/wp/2025/01/17122408/oviudrookieclass2-595x1024.jpeg',
        price: 85,
      },
      {
        ID: 5,
        title: 'Connor McDavid',
        description: 'Oilers Captain and NHL’s Best Player',
        imageUrl:
          'https://globalnews.ca/wp-content/uploads/2020/06/mcdavid-1.jpg?quality=65&strip=all',
        price: 95,
      },
      {
        ID: 6,
        title: 'Jaromir Jagr',
        description: 'NHL Legend and One of the Greatest Players of All Time',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeKhmd-B5_s694v8eK0f1qy2Rb3CmMbOFng&s',
        price: 70,
      },
      {
        ID: 7,
        title: 'Patrick Roy',
        description: 'Hall of Fame Goalie and NHL Legend',
        imageUrl: 'https://i.ebayimg.com/images/g/7LkAAOSwaltkVCl6/s-l1200.jpg',
        price: 75,
      },
    ];
    this.onepieceCards = [
      {
        ID: 1,
        title: 'Monkey D. Luffy',
        description:
          'The main protagonist of One Piece, known for his rubber powers and adventurous spirit.',
        imageUrl:
          'https://store.401games.ca/cdn/shop/files/Monkey.D.Luffy_PremiumCardCollection-BestSelectionVol.3-_-P-075-Promo_500x.jpg?v=1747254691',
        price: 50,
      },
      {
        ID: 2,
        title: 'Roronoa Zoro',
        description:
          'The swordsman of the Straw Hat Pirates, known for his three-sword fighting style.',
        imageUrl: 'https://i.ebayimg.com/images/g/f9UAAOSw~7Nmh1YC/s-l400.jpg',
        price: 45,
      },
      {
        ID: 3,
        title: 'gear 4 luffy',
        description:
          'Luffy’s powerful transformation that enhances his strength, speed, and durability.',
        imageUrl: 'https://i.ebayimg.com/images/g/XIgAAOSwE19nSZWF/s-l400.jpg',
        price: 40,
      },
      {
        ID: 4,
        title: 'Gear 5 Luffy',
        description:
          'Luffy’s most powerful transformation, combining all his previous Gear transformations into one ultimate form.',
        imageUrl: 'https://i.ebayimg.com/images/g/vgsAAOSwIGNlBUEA/s-l400.jpg',
        price: 35,
      },

      {
        ID: 5,
        title: 'Brook',
        description:
          'The musician of the Straw Hat Pirates, known for his skeletal appearance and soul-based abilities.',
        imageUrl:
          'https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/EB01/EB01-046_EN.webp',
        price: 30,
      },
      {
        ID: 6,
        title: 'Jinbe',
        description:
          'The helmsman of the Straw Hat Pirates, known for his fishman karate skills and loyalty to his friends.',
        imageUrl: 'https://i.ebayimg.com/images/g/2CAAAOSw5jhkFzqk/s-l1200.jpg',
        price: 40,
      },

      {
        ID: 7,
        title: 'Portgas D. Ace',
        description:
          'Luffy’s older brother and a powerful pirate known for his fire-based abilities.',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0kHbwOAfSMovHG_A2_9inV5XkuHaAjJIlA&s',
        price: 45,
      },
      {
        ID: 8,
        title: 'Shanks',
        description:
          'The captain of the Red Hair Pirates and one of the Four Emperors, known for his strong Haki and influence in the pirate world.',
        imageUrl: 'https://cardotaku.com/cdn/shop/products/OP01-120.png?v=1658123210&width=2048',
        price: 50,
      },

      {
        ID: 9,
        title: 'Kaido',
        description:
          'One of the Four Emperors and the strongest creature in the world, known for his immense strength and durability.',
        imageUrl:
          'https://omotenashitcg.com/cdn/shop/files/PRB01-02_83_600x600_crop_center.jpg?v=1770186173',
        price: 50,
      },
      {
        ID: 10,
        title: 'Big Mom (Charlotte Linlin)',
        description:
          'One of the Four Emperors and the matriarch of the Big Mom Pirates, known for her insatiable appetite and powerful abilities.',
        imageUrl: 'https://asia-en.onepiece-cardgame.com/images/cardlist/card/ST07-001.png?251219',
        price: 45,
      },
    ];
  }
  getPokemonCards(): CardModel[] {
    return this.pokemonCards;
  }

  getNhlCards(): CardModel[] {
    return this.nhlCards;
  }
  getonepieceCards(): CardModel[] {
    return this.onepieceCards;
  }
}
