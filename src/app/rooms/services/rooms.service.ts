import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList_roomsS: RoomsList[] = [];

  getRooms$: Observable<RoomsList[]>;
  getPhotos$: Observable<any>;

  constructor(
    @Inject(APP_SERVICE_CONFIG) appServiceConfig: AppConfig,
    private http: HttpClient
  ) {

    // We are adding a new header to the request
    // But we have to do this for every request
    // So we will use HttpInterceptor to do this
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   token: '1287eruwehjdsfj',
    // });
    this.getRooms$ = this.http
      .get<RoomsList[]>('/api/rooms', {
        // headers: headers,
      })
      .pipe(shareReplay(1));

    this.getPhotos$ = this.http
      .get('https://jsonplaceholder.typicode.com/photos')
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
    // Writing Http Headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: '1287eruwehjdsfj',
    });

    return this.http.get<RoomsList[]>('/api/rooms', {
      headers: headers,
    });
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
