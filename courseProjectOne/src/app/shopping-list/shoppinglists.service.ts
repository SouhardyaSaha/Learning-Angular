import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs'

export class ShoppinglistsService {

  // newIngredientsAdded = new EventEmitter<Ingredient[]>()

  // Subject is related to observable which is better than eventemitter
  newIngredientsAdded = new Subject<Ingredient[]>()

  private list: Ingredient[] = [
    new Ingredient('Apple', 20),
    new Ingredient('Tomatoes', 120)

  ]

  getList () {
    return this.list.slice()
  }

  addToList(item: Ingredient) {
    this.list.push(item)
    // this.newIngredientsAdded.emit(this.list.slice())
    this.newIngredientsAdded.next(this.list.slice())
  }

  addMultipletoList(ingredients: Ingredient[]){
    this.list.push(...ingredients)
    // this.newIngredientsAdded.emit(this.list.slice())
    this.newIngredientsAdded.next(this.list.slice())
  }
}
