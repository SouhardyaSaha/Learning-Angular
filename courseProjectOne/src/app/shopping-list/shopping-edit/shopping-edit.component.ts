import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addedIngredient = new EventEmitter<Ingredient>()
  @ViewChild('nameInput') nameInputRef : ElementRef
  @ViewChild('amountInput') amountInputRef : ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const name = this.nameInputRef.nativeElement.value
    const amount = this.amountInputRef.nativeElement.value

    this.addedIngredient.emit(new Ingredient(name, amount))
  }

}
