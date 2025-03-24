import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rooms, RoomsList } from '../rooms';
import {
  NgClass,
  NgStyle,
  LowerCasePipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgIf,
  NgFor,
} from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [
    NgClass,
    NgStyle,
    DatePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    NgIf,
    NgFor,
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent {
  @Input() rooms: RoomsList[] = [];
  @Input() room: Rooms = {
    availableRooms: 0,
    bookedRooms: 0,
    totalRooms: 0,
  };
  @Output() selectedRoom_RLC = new EventEmitter<RoomsList>();
  selectRoom_RLC(room: RoomsList) {
    this.selectedRoom_RLC.emit(room);
  }
}
