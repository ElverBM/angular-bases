import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiterman', 'Batman', 'Hulk', 'Thor', 'Capitan America', 'Superman', 'SpiderMan', 'Ironman']
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
    // console.log( {deletedHero} )
    // this.deletedHero = deletedHero;

  }

}
