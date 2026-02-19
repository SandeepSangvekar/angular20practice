import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  constructor(private _fb:FormBuilder){

  }
  ngOnInit(){
    // this.regForm = new FormGroup({
    // this.regForm = this._fb.group({
    //   fName: new FormControl(''),
    //   lName: new FormControl(''),
    //   email: new FormControl(''),
    //   contactNo: new FormControl('9298383383'),

    // })
    this.regForm = this._fb.group({
      fName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(7)])],
      lName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      contactNo: [9298383383, Validators.required],

    })
  }
  regForm!:FormGroup;

  onSubmit(formData: FormGroup){
    console.log(formData.value);
    console.log(formData.valid);
  }
}
