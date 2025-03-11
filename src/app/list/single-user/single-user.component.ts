import { Component,AfterViewInit,ViewChild } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-single-user',
  imports: [],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent  {
  // @ViewChild(UserComponent) userComponent: UserComponent | undefined;  // Access UserComponent

  // ngAfterViewInit(): void {
  //   // It's a good practice to ensure the user is available
  //   if (this.userComponent) {
  //     this.siglecreate();  // Call the create method once the view is initialized
  //   }
  // }

  // siglecreate(): void {
    
  //     this.userComponent.create();  // Call the create() method on UserComponent
    
  // }
}