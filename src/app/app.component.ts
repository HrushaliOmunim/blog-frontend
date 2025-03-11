import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './list/user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
