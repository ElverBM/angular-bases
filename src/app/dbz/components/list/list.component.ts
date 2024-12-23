
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output('deletePersonaje')
  public onDeletePersonaje: EventEmitter<number> = new EventEmitter();

  @Output('deletePer')
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 50
  }]

  onDeleteCharacter(index:number):void{
    // TODO: Emitir el ID del personaje
    // console.log({index});



    this.onDeletePersonaje.emit(index);


  }

  onDelete( id:string ):void{
    this.onDeleteById.emit(id);
  }

 }
