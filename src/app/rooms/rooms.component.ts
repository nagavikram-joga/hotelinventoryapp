import { Component } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import {
  NgIf,
  NgFor,
  NgClass,
  NgStyle,
  LowerCasePipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe
} from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  imports: [
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
    DatePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName: string = 'Hilton Hotel';
  noOfRooms: number = 10;
  hideRooms: boolean = false;

  room: Rooms = {
    availableRooms: 3,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomsList: RoomsList[] = [
    {
      roomId: 100,
      roomType: 'Deluxe',
      amenities: 'AC, Wifi',
      price: 5000,
      roomNumber: 1,
      checkInTime: new Date('25 Nov, 2024'),
      rating: 3.2,
    },
    {
      roomId: 100,
      roomType: 'Deluxe',
      amenities: 'AC, Wifi',
      price: 5000,
      roomNumber: 2,
      checkInTime: new Date('25 Nov, 2024'),
      rating: 4.3,
    },
    {
      roomId: 100,
      roomType: 'Deluxe',
      amenities: 'AC, Wifi',
      price: 5000,
      roomNumber: 3,
      checkInTime: new Date('25 Nov, 2024'),
      rating: 4.7,
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
