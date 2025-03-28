import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Inject,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { NgIf, JsonPipe, AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { APP_SERVICE_CONFIG } from '../appConfig/appconfig.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  imports: [RoomsListComponent, NgIf, JsonPipe, HeaderComponent, AsyncPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})

//
//
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  subsciption!: Subscription;

  hotelName_RC: string = 'Hilton Hotel';
  noOfRooms_RC: number = 10;
  hideRooms_RC: boolean = true;
  title_RC: string = 'Room List';
  roomsList_roomsC!: RoomsList[];
  selectedRoom_RC?: RoomsList;
  room_RC: Rooms = {
    availableRooms: 0,
    bookedRooms: 0,
    totalRooms: 0,
  };
  totalBytes!: number;

  // All variables ending with $ are streams of observables
  rooms$!: Observable<RoomsList[]>;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  roomsCount$!: Observable<number>;

  // stream_roomsC = new Observable<string>((observer) => {
  //   observer.next('user1');
  //   observer.next('user2');
  //   observer.next('user3');
  //   observer.next('user4');
  //   observer.complete();
  //   // observer.error('error');
  // });

  //  Always make services private, and do not inject a component directly.
  constructor(@SkipSelf() private roomsService_roomsC: RoomsService) {
    // constructor is used for services injection & it shouldn't have any blocking code in it
    // console.log('Room service started ...');
  }

  // ngOnInit() used for logic
  ngOnInit(): void {
    //We can fetch data by using stream of observable

    // this.stream_roomsC.subscribe((data) => {
    //   console.log(data);
    // });

    //The above one can also be written as below
    // this.stream_roomsC.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('completed'),
    //   error: (err) => console.log(err),
    // });

    // We can fetch data by using service http request
    // this.roomsService_roomsC.getRooms$.subscribe((rooms) => {
    //   this.roomsList_roomsC = rooms;
    // });
    // console.log(this.roomsService_roomsC.getRooms());

    // Ensure getError$ is set up
    // this.getError$.subscribe((errorMessage: string) => {
    //   console.error('Error received:', errorMessage); // Log or handle the error
    // });

    this.rooms$ = this.roomsService_roomsC.getRooms$.pipe(
      catchError((error) => {
        console.log('Error : ' + error.message);
        this.error$.next(error.message);
        return of([]);
      })
    );

    // RxJs Map operator
    this.roomsCount$ = this.roomsService_roomsC.getRooms$.pipe(
      map((rooms) => rooms.length)
    );
    // console.log(this.roomsCount$);

    // console.log(this.headerComponent_RC);

    this.roomsService_roomsC.getPhotos$.subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes = event.loaded;
          console.log(this.totalBytes);
          break;
        case HttpEventType.Response:
          console.log('Request has been completed');
          break;
        default:
          
      }
    });
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

  addRoom_roomsC() {
    const room: RoomsList = {
      // roomId: 200,
      roomType: 'Superme Deluxe',
      amenities: 'AC, Wifi',
      price: 25000,
      roomNumber: '10',
      photos: '',
      checkinTime: new Date('29 Nov, 2025'),
      checkoutTime: new Date('30-Nov-2025'),
      rating: 4.2,
    };
    this.roomsService_roomsC.addRoom(room).subscribe((data) => {
      this.roomsList_roomsC = data;
    });
    // this.roomsList.push(room);   // Don't use it as it causes re-rendering as whole
    // instead use below
    // this.roomsList_roomsC = [...this.roomsList_roomsC, room];
  }

  updateRoom_roomsC() {
    const room: RoomsList = {
      // roomId: 200,
      roomType: ' Suite',
      amenities: 'AC, Wifi',
      price: 25000,
      roomNumber: '1',
      photos: '',
      checkinTime: new Date('29 Nov, 2025'),
      checkoutTime: new Date('30-Nov-2025'),
      rating: 4.2,
    };
    this.roomsService_roomsC.updateRoom(room).subscribe((data) => {
      this.roomsList_roomsC = data;
    });
  }

  deleteRoom_roomsC() {
    this.roomsService_roomsC.deleteRoom('3').subscribe((data) => {
      this.roomsList_roomsC = data;
    });
  }

  // Try to avoid ngDoCheck() as it will be executed for every event on the screen which causes performance issues
  // Don't use ngDoCheck() & ngOnChange() together on same component as a single change is captured twice
  // once by ngDoCheck() & once by ngOnChange()
  ngDoCheck() {
    // console.log('ngDoCheck() from RC');
  }

  @ViewChild(HeaderComponent)
  headerComponent_roomsC!: HeaderComponent;
  // Here static is by default false, then we can get response only in ngAfterViewInit()
  // If we make static to true, then we can get response in both ngOnInit() & ngAfterViewInit()
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit() from RC');
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

  ngOnDestroy(): void {
    // We are un-subscribing manually to avoid memory leaks
    if (this.subsciption) {
      this.subsciption.unsubscribe();
    }
  }
}
