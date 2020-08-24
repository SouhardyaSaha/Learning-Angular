import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: {}
  suggestionName: string = 'Oniket'
  defaultSelectOption: string = 'pet'
  answer: string = ''
  @ViewChild('f') signupForm: NgForm
  genders: string[] = ['male', 'female']

  onSuggestUsername() {

    // set value for setting all the values of the form
    // this.signupForm.form.setValue({
    //   userData: {
    //     username: this.suggestionName,
    //     email: 'slkj@emai.com'
    //   },
    //   gender: 'male',
    //   secret: 'pet',
    //   answer: 'nick'
    // })

    // patchvalue for setting portion of the form
    this.signupForm.form.patchValue({
      userData: {
        username: this.suggestionName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // this is an alternative to upper approach using view child
  onSubmit() {
    console.log(this.signupForm);
    this.user = {
      ...this.signupForm.value
    }
    this.signupForm.reset()

  }

}
