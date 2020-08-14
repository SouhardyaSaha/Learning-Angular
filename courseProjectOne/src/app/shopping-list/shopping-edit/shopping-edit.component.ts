import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistsService } from '../shoppinglists.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef
  @ViewChild('amountInput') amountInputRef : ElementRef

  constructor(private shoppinglistService: ShoppinglistsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const name: string = this.nameInputRef.nativeElement.value
    const amount: number = this.amountInputRef.nativeElement.value
    const ingredient : Ingredient = new Ingredient(name, amount)
    this.shoppinglistService.addToList(ingredient)
  }

}
