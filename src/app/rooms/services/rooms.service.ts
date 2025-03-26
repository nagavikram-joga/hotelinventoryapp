import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList_roomsS: RoomsList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) appServiceConfig: AppConfig) {
    // console.log(environment.apiUrl);
    console.log(appServiceConfig);
    console.log('Rooms service initialized..');
  }

  getRooms() {
    return this.roomsList_roomsS;
  }
}
