import { Component, DoCheck, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { NgIf, JsonPipe } from '@angular/common';
@Component({
  selector: 'hinv-rooms',
  imports: [RoomsListComponent, NgIf, JsonPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName_RC: string = 'Hilton Hotel';
  noOfRooms_RC: number = 10;
  hideRooms_RC: boolean = false;
  title_RC: string = 'Room List';
  roomsList_RC: RoomsList[] = [];
  selectedRoom_RC?: RoomsList;
  room_RC: Rooms = {
    availableRooms: 0,
    bookedRooms: 0,
    totalRooms: 0,
  };

  constructor() {} // constructor is used for services injection & it shouldn't have any blocking code in it

  ngOnInit(): void {
    // ngOnInit() used for logic
    this.roomsList_RC = [
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
    this.room_RC = {
      availableRooms: 3,
      bookedRooms: 5,
      totalRooms: 20,
    };
  }

  toggle_RC() {
    this.hideRooms_RC = !this.hideRooms_RC;
    this.title_RC = 'rooms list';
    console.log('RC toggle() : ' + this.title_RC);
  }

  selectRoom_RC(room_RC: RoomsList) {
    console.log(room_RC);
    this.selectedRoom_RC = room_RC;
  }

  addRoom_RC() {
    const room: RoomsList = {
      roomId: 200,
      roomType: 'Superme Deluxe',
      amenities: 'AC, Wifi',
      price: 25000,
      roomNumber: 10,
      checkInTime: new Date('29 Nov, 2025'),
      rating: 4.2,
    };
    // this.roomsList.push(room);   // Don't use it as it causes re-rendering as whole
    // instead use below
    this.roomsList_RC = [...this.roomsList_RC, room];
  }

  // Try to avoid ngDoCheck() as it will be executed for every event on the screen which causes performance issues
  // Don't use ngDoCheck() & ngOnChange() together on same component as a single change is captured twice
  // once by ngDoCheck() & once by ngOnChange()
  ngDoCheck() {
    console.log('ngDoCheck() from RC');
  }
}
