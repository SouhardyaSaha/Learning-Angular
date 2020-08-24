import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  forbiddenNames: string[] = ['alice', 'sneha']
  genders: string[] = ['male', 'female']
  signupForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkOfForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.checkOfForbiddenEmails])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })

    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    )

    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    )

    // this.signupForm.setValue({
          // setting the whole form value
    // })

    // this.signupForm.patchValue({
// setting portion of the form
    // })
  }

  onSignup() {
    console.log(this.signupForm);
    this.signupForm.reset()
  }

  onAddhobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  // Synchronous validators
  checkOfForbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenNames.includes(control.value)) {
      return { 'forbiddenName': true }
    }
    return null
  }

  // Asynchronous validators
  checkOfForbiddenEmails(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'test@test.com') {
            resolve({'forbiddenEmail': true})
          }
          resolve(null)
        } ,1000)
      }
    )

    return promise
  }

}
