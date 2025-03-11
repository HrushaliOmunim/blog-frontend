import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { SingleUserComponent } from '../single-user/single-user.component';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [RouterLink,SingleUserComponent,CommonModule,HttpClientModule,NgFor,UpperCasePipe,NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

product:any[]=[];

constructor(private http:HttpClient ){}

userName: string = '';


  ngOnInit(): void {
   this.create()
  }
  public create(){
     this.userName = 'New User Created!';
    console.log(this.userName);
  // const apii = "https://fakestoreapi.com/products";
 
  // this.http.get(apii).subscribe((response:any)=>{
 
    // this.product = response;
    // console.log(this.product);
  // })

  }

}
