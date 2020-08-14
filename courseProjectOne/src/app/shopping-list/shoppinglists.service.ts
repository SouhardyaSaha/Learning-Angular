import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core'

export class ShoppinglistsService {
  newIngredientsAdded = new EventEmitter<Ingredient[]>()
  private list: Ingredient[] = [
    new Ingredient('Apple', 20),
    new Ingredient('Tomatoes', 120)

  ]

  getList () {
    return this.list.slice()
  }

  addToList(item: Ingredient) {
    this.list.push(item)
    this.newIngredientsAdded.emit(this.list.slice())
  }

  addMultipletoList(ingredients: Ingredient[]){
    this.list.push(...ingredients)
    this.newIngredientsAdded.emit(this.list.slice())
  }
}
