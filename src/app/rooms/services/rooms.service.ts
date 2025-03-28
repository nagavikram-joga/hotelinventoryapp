import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList_roomsS: RoomsList[] = [];

  getRooms$: Observable<RoomsList[]>;

  constructor(
    @Inject(APP_SERVICE_CONFIG) appServiceConfig: AppConfig,
    private http: HttpClient
  ) {
    this.getRooms$ = this.http
      .get<RoomsList[]>('/api/rooms')
      .pipe(shareReplay(1));
    // console.log(appServiceConfig);
    // console.log('Rooms service initialized..');
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }

  getRooms(): Observable<RoomsList[]> {
    return this.http.get<RoomsList[]>('/api/rooms');
  }
  addRoom(room: RoomsList) {
    return this.http.post<RoomsList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomsList) {
    // console.log('Update room is called');
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(id: string) {
    console.log('Delete Room called in RoomsService');
    return this.http.delete<RoomsList[]>(`api/rooms/${id}`);
  }
}
