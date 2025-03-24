import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { NgIf,JsonPipe } from '@angular/common';
@Component({
  selector: 'hinv-rooms',
  imports: [RoomsListComponent, NgIf,JsonPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';
  noOfRooms: number = 10;
  hideRooms: boolean = false;
  roomsList: RoomsList[] = [];
  selectedRoom_RC!: RoomsList ;
  room: Rooms = {
    availableRooms: 0,
    bookedRooms: 0,
    totalRooms: 0,
  };

  constructor() {} // constructor is used for services injection & it shouldn't have any blocking code in it

  ngOnInit(): void {
    // ngOnInit() used for logic
    this.roomsList = [
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
      {
        roomId: 100,
        roomType: 'Deluxe',
        amenities: 'AC, Wifi',
        price: 5000,
        roomNumber: 4,
        checkInTime: new Date('25 Nov, 2024'),
        rating: 4.6,
      },
      {
        roomId: 100,
        roomType: 'Ultra Deluxe',
        amenities: 'AC, Wifi',
        price: 15000,
        roomNumber: 5,
        checkInTime: new Date('25 Nov, 2024'),
        rating: 5,
      },
    ];
    this.room = {
      availableRooms: 3,
      bookedRooms: 5,
      totalRooms: 20,
    };
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    
  }

  selectRoom_RC(room: RoomsList) {
    console.log(room);
    this.selectedRoom_RC = room;
  }
}
