import { Component } from '@angular/core';
// import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'hinv-root',
  imports: [
    // RouterOutlet,
    RoomsComponent,
    
  ],
  templateUrl: './app.component.html',
  // template:`<h1>Hello World from inline html</h1>
  // <p>This is Vikram</p>`,
  styleUrl: './app.component.scss',
  // styles : [`h1{color:red}`],
})
export class AppComponent {
  title = 'HotelInventoryApp';
  role = 'user';
}
