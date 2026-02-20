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
    // using valueChanges on specific formControl
    this.regForm.get('fName')?.valueChanges.subscribe(firstName =>{
      console.log('firstName:', firstName);
    })
    // using valueChanges on formGroup
    this.regForm.valueChanges.subscribe(formData =>{
      console.log('firstName:', formData.fName);
      console.log('lastName:', formData.lName);
      console.log('formData:', formData); // to get all formGroup data
    });
    // to check status using statusChanges
    this.regForm.get('fName')?.statusChanges.subscribe(fnameStatus =>{
      console.log('fName status:', fnameStatus);
    });
    // to check status for all formGroup
    this.regForm.statusChanges.subscribe(formDataStatus =>{
      console.log('formDataStatus:', formDataStatus);
      
    })
  }
  regForm!:FormGroup;

  reset(){
    // this.regForm.reset();
    // this.regForm.reset({
    //   fName: 'Sandeep'
    // })
    this.regForm.reset({
      fName: this.regForm.get('fName')?.value,
    })
  }

  onSubmit(formData: FormGroup){
    console.log(formData.value);
    console.log(formData.valid);
    console.log(formData.get('fName')?.value);
    console.log(formData.get('lName')?.value);
  }
  fillData(){
    // to fill complete formGroup use setVaule()
    // this.regForm.setValue({
    //   fName: 'Sandeep',
    //   lName: 'Sangvekar',
    //   email: 'text@gmail.com',
    //   contactNo: '9999929999',
    // })
    // tto fill specific formGroup control use setVaule()
    this.regForm.patchValue({
      fName: 'Vipul',
      lName: 'Shah',
      // email: '',
      contactNo: 9292922929
    })
  }
  
}   
