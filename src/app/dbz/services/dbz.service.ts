import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

// console.log(uuid())

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})


export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name:'Goku',
    power:9580
  },
  {
    id: uuid(),
    name:'Pikoro',
    power:5000
  }
];

  addCaracter( character: Character ):void{

    const newCharacter: Character = { id:uuid(), ...character };

    this.characters.push(newCharacter);

  }

  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( character => character.id !== id );
  }
  // onDeleteCharacter( index:number ):void{

  //   this.characters.splice(index,1);
  // }

  constructor() { }

}
