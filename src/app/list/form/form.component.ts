import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {


  ngOnInit(): void {
    this.intiatedata();
  }
  formdata! : FormGroup;

  intiatedata():void{
    this.formdata = new FormGroup({
      id: new FormControl(''),  
      username: new FormControl('', [Validators.required, Validators.minLength(3)]) 
    });
  }

  showfromdata(){
    console.log(this.formdata.value);
  }
   
 

  


}
