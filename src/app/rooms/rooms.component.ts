import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { NgIf, JsonPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  imports: [RoomsListComponent, NgIf, JsonPipe, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
//
//
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName_RC: string = 'Hilton Hotel';
  noOfRooms_RC: number = 10;
  hideRooms_RC: boolean = true;
  title_RC: string = 'Room List';
  roomsList_roomsC: RoomsList[] = [];
  selectedRoom_RC?: RoomsList;
  room_RC: Rooms = {
    availableRooms: 0,
    bookedRooms: 0,
    totalRooms: 0,
  };

  //  Always make services private, and do not inject a component directly.
  constructor(@SkipSelf() private roomsService_roomsC: RoomsService) {
    // constructor is used for services injection & it shouldn't have any blocking code in it
    console.log('Room service started ...');
  }

  ngOnInit(): void {
    // ngOnInit() used for logic
    this.roomsList_roomsC = this.roomsService_roomsC.getRooms();

    this.room_RC = {
      availableRooms: 3,
      bookedRooms: 5,
      totalRooms: 20,
    };
    // console.log(this.headerComponent_RC);
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
    this.roomsList_roomsC = [...this.roomsList_roomsC, room];
  }

  // Try to avoid ngDoCheck() as it will be executed for every event on the screen which causes performance issues
  // Don't use ngDoCheck() & ngOnChange() together on same component as a single change is captured twice
  // once by ngDoCheck() & once by ngOnChange()
  ngDoCheck() {
    console.log('ngDoCheck() from RC');
  }

  @ViewChild(HeaderComponent)
  headerComponent_roomsC!: HeaderComponent;
  // Here static is by default false, then we can get response only in ngAfterViewInit()
  // If we make static to true, then we can get response in both ngOnInit() & ngAfterViewInit()
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() from RC');
    // console.log(this.headerComponent_RC);
    this.headerComponent_roomsC.title_headerC = 'Hotel Inventory App ';
    // If error occurs here in development mode, it is absolutely fine because Angular runs change detection twice in development mode
    // If error occurs in production mode, then we have to check the error.
  }

  //  Incase we have multiple same components on the screen, @ViewChild only takes first instance, and remaining
  //  instances are not rendered
  //  In that case we have to use @ViewChildren

  // @ViewChildren(HeaderComponent) vc_roomsC!: QueryList<HeaderComponent>;
  // ngAfterViewInit(): void {
  //   this.vc_roomsC.first.title_headerC = 'Title';
  //   this.vc_roomsC.forEach((element) => {
  //     element.title_headerC = 'Title';
  //   });
  // }

  ngAfterViewChecked(): void {}
}
