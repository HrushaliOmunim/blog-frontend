import { Component,AfterViewInit,ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-single-user',
  imports: [],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent  {
 
  // @Input() user!:any;
  @Output() userCreated = new EventEmitter<any>();

  singleusercreate(){
    const newUserName = 'John Doe';
    this.userCreated.emit(newUserName); 

  }




}