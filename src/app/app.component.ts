import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm!:FormGroup;

  constructor(
    private fb:FormBuilder
  ){
    
  }
  intialize(){
    this.myForm = this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
    })

  }

  Submit(form:any){
   console.log(form.value)
  }

  get valid(){
    return this.myForm.controls
  }

  ngOnInit(){
   this.intialize();
  }

}
